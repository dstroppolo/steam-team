const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();
app.use(cors);

app.use('/api', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => console.log('listening on port 4000') );