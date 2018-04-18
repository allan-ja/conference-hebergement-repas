const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

const User = require('./models/user')

mongoose.connect('mongodb://localhost/chr')

var alice = new User({name:{first: 'Alice', last:'oneil'}});

alice.save((err) => {
  if (err) throw err;
  console.log("saved sucessfully")
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


app.listen(port, () => console.log(`Listening on port ${port}`));
