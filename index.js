const express = require("express");
const postRouter = require('./routes/postRoute')
require('./models/index')
const cors = require('cors')

const app = express();

const port = 3000;

app.use(cors())
app.use(express.json())

app.use('/posts',postRouter)

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
