const express = require("express");
const data = require("./data.json");
const routes = require("./routes/posts");

const PORT = 4400;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello word");
});

app.use("/posts", routes);

app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log("App is running on port " + PORT);
});
