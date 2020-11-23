const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

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
