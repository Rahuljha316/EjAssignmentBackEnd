const express = require("express");
const Post = require("./models/post");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

Post.sync({}).then(() => console.log("model is synced"));

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
