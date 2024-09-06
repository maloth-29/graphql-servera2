import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";
import {  ApolloServer } from "apollo-server-express";
import students from './routes/students.js'
import express from 'express'


const app=express()
app.use('/std',students )
const server= new ApolloServer({typeDefs,resolvers})
await server.start()
server.applyMiddleware({app})
app.listen(4001)
console.log('server started......>>')