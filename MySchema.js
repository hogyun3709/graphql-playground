const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

/* Define data object type */

const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  /* based on API request query response keys - (For this project using SpaceX api v3)*/
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType }
  })
})

/* Rocket type obj */

const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  })
})

/* Root query - takes the role resolver */

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args){
        return axios.get('https://api.spacexdata.com/v3/launches')
         .then(res => res.data)
      }
    },
    /* check out single launch */
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      resolve(parent, args){
        return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then(res => res.data)
      }
    },
    /* Rocket as well */
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args){
        return axios.get('https://api.spacexdata.com/v3/rockets')
         .then(res => res.data)
      }
    },
    rocket: {
      type: RocketType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parent, args){
        return axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
          .then(res => res.data)
      }
    },


  }
})

/* Mutation */

module.exports = new GraphQLSchema({
  query: RootQuery
})
