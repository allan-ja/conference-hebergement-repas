const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./models/User');


const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/chr')

require('./routes')(app, {});


app.listen(port, () => console.log(`Listening on port ${port}`));
