const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    name: {first: String, last: String},
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    dojo: String,
    mission: String,
    // To find better name
    permissions: [String],
    favorite_language: String
})

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
}

mongoose.model('users', userSchema);
