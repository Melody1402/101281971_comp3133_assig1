const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//import ApolloServer
const { ApolloServer } = require('apollo-server-express')

const TypeDefs = require('./schema.js')
const Resolvers = require('./resolvers.js')

const db = 'mongodb+srv://dbMelody:qazzaq1402@cluster0.jtt9c.mongodb.net/101281971_comp3133_assig1?retryWrites=true&w=majority'
const port = process.env.PORT || 4000

// MongoDB Connection
mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true})
const connect = mongoose.connection
connect.once('open', () => {
    console.log('SUCCESS - MongoDB connection established.');
});
connect.on('error', (err) => {
    console.log("FAILED - MongoDB connection error. " + err);
    process.exit();
});

// Define Apollo Server
const server = new ApolloServer({
    typeDefs: TypeDefs,
    resolvers: Resolvers
})

const app = express()
app.use(bodyParser.json())

server.start()
.then(res => {
    server.applyMiddleware({app})
    // Start Server
    app.listen(port, () => {
        console.log(`Server at http://localhost:${port}${server.graphqlPath}`)
    })
})