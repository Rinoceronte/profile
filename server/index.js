require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/../build'));


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "../build/index.html"));
  });

app.listen(3005, () => console.log('running on 3005', path.join(__dirname, "../build/index.html")));