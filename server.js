const express = require('express');
/* Note that call graphql as function not as an object - watch out destructuring */
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

/* Mount express-graphql as a route handler */
app.use('/graphql', graphqlHTTP({
  schema,
  graphgl: true
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port${PORT}`));
