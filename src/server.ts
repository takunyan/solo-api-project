const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/restaurant");
const resolvers = require("./resolver/restaurant");

const server = new ApolloServer({ typeDefs, resolvers });

export function createServer() {
  /***Express setup***/
  const app = express();
  server.applyMiddleware({ app });
  return app;
}

module.exports = {
  createServer,
};
