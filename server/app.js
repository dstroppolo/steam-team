const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, "../", "client", "build")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../", "client", "build", "index.html")
    )
});

app.use('/api', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => console.log('listening on port 4000') );