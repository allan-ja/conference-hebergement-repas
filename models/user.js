const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {first: String, last: String},
    email: String,
    password: String,
    dojo: String,
    mission: String,
    // To find better name
    permissions: [String],
    favorite_language: String
})

module.exports = mongoose.model('users', userSchema);
