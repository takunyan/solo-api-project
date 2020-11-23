const { gql } = require("apollo-server");

const typeDefs = gql`
  type Pokemon {
    id: String!
    name: String!
    classification: String
    types: [String]
    resistant: [String]
    weaknesses: [String]
    weight: Weight
    height: Height
    fleeRate: Float
    evolutionRequirements: EvolutionRequirements
    evolutions: [Evolution]
    maxCP: Int
    maxHP: Int
    attacks: Attack
  }

  type Evolution {
    id: Int
    name: String
  }

  type Attack {
    fast: [AttackDetail]
    special: [AttackDetail]
  }

  type AttackDetail {
    name: String
    type: String
    damage: Int
  }

  type Weight {
    minimum: String
    maximum: String
  }

  type Height {
    minimum: String
    maximum: String
  }

  type EvolutionRequirements {
    amount: Int
    name: String
  }

  input PokemonInput {
    id: String!
    name: String!
    classification: String
    types: [String]
    resistant: [String]
    weaknesses: [String]
    weight: WeightInput
    height: HeightInput
    fleeRate: Float
    evolutionRequirements: EvolutionRequirementsInput
    evolutions: [EvolutionInput]
    maxCP: Int
    maxHP: Int
    attacks: AttackInput
  }

  input EvolutionInput {
    id: Int
    name: String
  }

  input AttackInput {
    fast: [AttackDetailInput]
    special: [AttackDetailInput]
  }

  input AttackDetailInput {
    name: String
    type: String
    damage: Int
  }

  input WeightInput {
    minimum: String
    maximum: String
  }

  input HeightInput {
    minimum: String
    maximum: String
  }

  input EvolutionRequirementsInput {
    amount: Int
    name: String
  }

  input EditPokemonInput {
    id: String!
    patch: PokemonInput
  }

  input EditTypeInput {
    name: String!
    patch: String!
  }

  input AddAttackInput {
    type: String!
    newAttack: AttackDetailInput
  }

  input EditAttackInput {
    name: String!
    patch: AttackDetailInput!
  }

  type Query {
    Pokemons: [Pokemon]
  }

  type Mutation {
    AddPokemon(input: PokemonInput!): Pokemon
    EditPokemon(input: EditPokemonInput!): Pokemon
    DeletePokemon(id: String!): Pokemon
  }
`;

module.exports = typeDefs;
