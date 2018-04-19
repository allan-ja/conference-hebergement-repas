const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/chr')

const Registration = require('./models/registration')

var registration = new Registration({name:{first: 'Alice', last:'oneil'}});

registration.save((err) => {
  if (err) throw err;
  console.log("saved sucessfully")
});

require('./routes')(app, {});

app.get('/api/registrations', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


app.listen(port, () => console.log(`Listening on port ${port}`));
