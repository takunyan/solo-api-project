import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import Restaurant from "../entity/Restaurant";
const restaurants = require("./restaurants.json");

export default class CreateRestaurants implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    console.log(restaurants);
    await connection
      .createQueryBuilder()
      .insert()
      .into(Restaurant)
      .values(restaurants)
      .execute();
  }
}
