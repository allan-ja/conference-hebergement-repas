const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    lastname: String,
    firstname: String,
    gender: String,
    date_of_birth: String
})