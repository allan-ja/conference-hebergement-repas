const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/chr')

const Registration = require('./models/registration')

var registration = new Registration({name:{first: 'Alice', last:'oneil'}});

registration.save((err) => {
  if (err) throw err;
  console.log("saved sucessfully")
});

app.get('/api/registrations', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


app.listen(port, () => console.log(`Listening on port ${port}`));
