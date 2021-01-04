import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hey,buddy");
});

app.listen(3232, () => {
  console.log("Server started on port:3232");
});
