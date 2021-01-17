import express from "express";
import { createConnection } from "typeorm";
import { Article } from "./entities/Article";
import { User } from "./entities/User";
import { usersRoute } from "./routes/users";
import { userRoute } from "./routes/user";

const app = express();

app.get("/", (req, res) => {
  res.send("Hey,buddy");
});

app.use("/api/users", usersRoute);
app.use("/api/user", userRoute);

async function start() {
  await createConnection({
    type: "mysql",
    username: "root",
    password: "ssingh",
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
