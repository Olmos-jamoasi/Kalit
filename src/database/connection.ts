import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./dbsqlite",
  entities: [__dirname + "/entities/user.entity.ts"],
  synchronize: true,
});

function createConnection () {
dataSource
  .initialize()
  .then(() => console.log("databse is connected"))
  .catch((err) => console.error("database error:\n", err));
}

export default createConnection;
