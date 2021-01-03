const express = require('express');
/* Note that call graphql as function not as an object - watch out destructuring */
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors')
const MySchema = require('./MySchema');

const app = express();

app.use(cors());
/* Mount express-graphql as a route handler */
/*
app.use('/graphql', graphqlHTTP({
  schema: MySchema,
  graphgl: true
}));
*/

app.use(
  '/graphql',
  graphqlHTTP({
    schema: MySchema,
    graphiql: true,
  }),
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port${PORT}`));
