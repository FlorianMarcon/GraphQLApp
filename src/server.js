const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers/post');

const app = express();
const typeDefs = importSchema('./src/schema/post.graphql');
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

module.exports = app;
