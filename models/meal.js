const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    attendee: Schema.Types.Objects,
})