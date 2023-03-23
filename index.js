const express = require('express')

const app = express();
require('./models/index')
const port = 3000

app.get('/', (req,res) =>{
    res.send('hello world')
})

app.listen(port,() =>{
    console.log(`app is running at ${port}`);
});