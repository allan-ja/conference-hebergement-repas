const mongoose = require('mongoose');
const { Schema } = mongoose;
<<<<<<< HEAD
const bcrypt = require('bcrypt');
=======
const bcrypt = require('bcrypt')
>>>>>>> 48559674fdd4cf01705ef17c7c5226ea8bce63b1
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    name: {first: String, last: String},
<<<<<<< HEAD
    email: { type: String, required: true, index: { unique: true} },
    password: { type: String, required: true},
    center: String,
=======
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    dojo: String,
>>>>>>> 48559674fdd4cf01705ef17c7c5226ea8bce63b1
    mission: String,
    // To find better name
    permissions: [String],
    favorite_language: String
})

<<<<<<< HEAD
// TODO: Add bcrypt
userSchema.methods.verifyPassword = function(password) {  
    return this.password == password
=======
userSchema.pre('save', async function(next) {
    var user = this;
    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hash = await bcrypt.hash(user.password, salt);
    
    user.password = hash;
    next();     
});

userSchema.methods.verifyPassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password)
>>>>>>> 48559674fdd4cf01705ef17c7c5226ea8bce63b1
}

mongoose.model('users', userSchema);
