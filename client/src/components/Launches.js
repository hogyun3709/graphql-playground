/* Make Query to graphql */

import React, { Fragment } from "react";
// import gql from 'graphql-tag';
// import { Query } from 'react-apollo'
import { gql, useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

function Launches({}) {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return "Loading..";
  if (error) console.log(error);
  console.log(data);

  return (
    <Fragment>
      <h1 className="display-4 my-3">Laucnhes</h1>
      {data.launches.map(launch => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </Fragment>
  );
}

export default Launches;
