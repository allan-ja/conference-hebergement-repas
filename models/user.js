const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    name: {first: String, last: String},
    email: { type: String, required: true, index: { unique: true} },
    password: { type: String, required: true},
    center: String,
    mission: String,
    // To find better name
    permissions: [String],
    favorite_language: String
})

// TODO: Add bcrypt
userSchema.methods.verifyPassword = function(password) {  
    return this.password == password
}

mongoose.model('users', userSchema);
