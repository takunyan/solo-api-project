import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection()
  .then(async (connection) => {
    console.log("created connection:", connection);
  })
  .catch((error) => console.log(error));
