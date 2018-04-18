const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {first: String, last: String, required: true},
    gender: String,
    date_of_birth: Date,
    languages: [String],
    timestamps: true
})