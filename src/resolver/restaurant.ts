const { getRepository } = require("typeorm");
const { Restaurant } = require("../entity/Restaurant");

module.exports = {
  Query: {
    Restaurants: async () => {
      return await getRepository(Restaurant).find();
    },
  },
  Mutation: {
    AddRestaurant: async (parent, args) => {
      return await getRepository(Restaurant).save(args.input);
    },
    EditRestaurant: async (parent, args) => {
      let editedRestaurant = await getRepository(Restaurant).findOne(args.id);
      if (!editedRestaurant) {
        return;
      }
      for (const key in args.input.patch) {
        if (key === "id") {
          editedRestaurant[key] = args.input.id;
        } else {
          editedRestaurant[key] = args.input.patch[key];
        }
      }
      await getRepository(Restaurant).update(args.input.id, editedRestaurant);
      return editedRestaurant;
    },
    DeleteRestaurant: async (parent, args) => {
      const deletedRestaurant = await getRepository(Restaurant).findOne(
        args.id
      );
      if (!deletedRestaurant) {
        return;
      }
      await getRepository(Restaurant).delete(args.id);
      return deletedRestaurant;
    },
  },
};
