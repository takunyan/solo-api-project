const { getRepository } = require("typeorm");
const { Restaurant } = require("../entity/Restaurant");

module.exports = {
  Query: {
    Restaurants: () => {
      return getRepository(Restaurant).find();
    },
  },
  //   Mutation: {
  //     AddPokemon: (parent, args) => {
  //       data.pokemon.push(args.input);
  //       return data.pokemon[data.pokemon.length - 1];
  //     },
  //     EditPokemon: (parent, args) => {
  //       let editedPokemon;
  //       data.pokemon.forEach((pokemon) => {
  //         if (pokemon.id === args.input.id) {
  //           for (let key in args.input.patch) {
  //             pokemon[key] = args.input.patch[key];
  //           }
  //           editedPokemon = pokemon;
  //         }
  //       });
  //       return editedPokemon;
  //     },
  //     DeletePokemon: (parent, args) => {
  //       let deletedPokemon;
  //       data.pokemon.forEach((pokemon, index) => {
  //         if (pokemon.id === args.id) {
  //           [deletedPokemon] = data.pokemon.splice(index, 1);
  //         }
  //       });
  //       return deletedPokemon;
  //     },
  //  },
};
