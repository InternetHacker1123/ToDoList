const express = require("express");

const app = express();

const port = 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));

app.get("/", (req, res) => {
  res.send({ express: "express back is connected to react" });
});

app.get("/admin", (req, res) => {
  res.send("Its main menu");
});
