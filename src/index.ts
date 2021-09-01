import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { EmployeeResolver } from "./resolvers/EmployeeResolver";
import { Employee } from "./entities/Employee";
import { CompanyResolver } from "./resolvers/CompanyResolver";

async function main() {
  createConnection().then(async connection => {
    console.log("Loading users from the database...");

    // const stds = connection.getMongoRepository(Employee);

    // await stds.save({ name: "o bixo papão", role: "papai noel" });
    // const teste = stds.manager.aggregate(Employee, [{
    //   $match: {
    //     name: "o bixo papão",
    //   }
    // },
    // {
    //   $sort: {
    //     createdAt: -1
    //   }
    // }
    // ]);
    // console.log(await teste.toArray());

    console.log("TypeORM with MongoDB");
  }).catch(error => console.log(error));
  const schema = await buildSchema({ resolvers: [EmployeeResolver, CompanyResolver] });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log("Server has starteds!");
}

main();
