const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Restaurant {
    id: String!
    name: String!
    genre: String
    comment: String
    score: Int
  }

  type Query {
    Restaurants: [Restaurant]
  }
`;

module.exports = typeDefs;
