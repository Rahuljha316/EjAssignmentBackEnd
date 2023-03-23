const express = require("express");
const postRouter = require('./routes/postRoute')
require('./models/index')

const app = express();

const port = 3000;

// app.get("/", (req, res) => {
//   res.send("hello world");
// });
app.use(express.json())

app.use('/posts',postRouter)

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
