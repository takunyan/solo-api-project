import "reflect-metadata";
import { createConnection } from "typeorm";
import { createServer } from "./server";

createConnection()
  .then(async (connection) => {
    const app = createServer();

    app.listen({ port: 4000 }, () =>
      console.log("Now browse to http://localhost:4000")
    );
  })
  .catch((error) => console.log(error));
