const express = require("express");
const data = require("./data.json");

const PORT = 4400;

const app = express();

app.get("/", (req, res) => {
  res.send("hello word");
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.delete("/data/delete/:index", (req, res) => {
  data.splice(Number(req.params.index), 1);
  res.send(data);
});

app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log("App is running on port " + PORT);
});
