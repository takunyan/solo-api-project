const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/restaurant");
const resolvers = require("./resolver/restaurant");
const cors = require("cors");

const server = new ApolloServer({ typeDefs, resolvers });

export function createServer() {
  /***Express setup***/
  const app = express();
  app.use(cors());
  app.use(express.json());

  server.applyMiddleware({ app });
  return app;
}

module.exports = {
  createServer,
};
