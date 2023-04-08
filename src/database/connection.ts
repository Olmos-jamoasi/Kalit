import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./dbsqlite",
  entities: [__dirname + "/entities/user.entity.ts"],
  synchronize: true,
});

dataSource
  .initialize()
  .then(() => console.log("databse is connected"))
  .catch((err) => console.error("database error:\n", err));
