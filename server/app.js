const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const publicDirectioryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectioryPath))
app.use(express.json());

app.listen(port, ()=> {
    console.log('listening on port ', port)
})



