import express from "express";
import { createConnection } from "typeorm";
import { Article } from "./entities/Article";
import { User } from "./entities/User";

const app = express();

app.get("/", (req, res) => {
  res.send("Hey,buddy");
});

async function start() {
  await createConnection({
    type: "mysql",
    username: "*****",
    password: "*****",
    database: "medium",
    entities: [Article, User],
    synchronize: true,
    logging: true,
    logger: "advanced-console",
  });

  app.listen(3232, () => {
    console.log("Server started on port:3232");
  });
}

start();
