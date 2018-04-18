const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { first: String, last: String },
    gender: String,
    date_of_birth: Date,
    languages: [String]
})

module.exports = mongoose.model('users', userSchema);
