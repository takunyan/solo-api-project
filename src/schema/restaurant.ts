const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Restaurant {
    id: String!
    name: String!
    genre: String
    comment: String
    score: Int
  }

  input RestaurantInput {
    id: Int
    name: String!
    genre: String
    comment: String
    score: Int
  }

  input EditRestaurantInput {
    id: Int!
    patch: RestaurantInput
  }

  type Query {
    Restaurants: [Restaurant]
  }

  type Mutation {
    AddRestaurant(input: RestaurantInput!): Restaurant
    EditRestaurant(input: EditRestaurantInput!): Restaurant
    DeleteRestaurant(id: Int!): Restaurant
  }
`;

module.exports = typeDefs;
