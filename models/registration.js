const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    attendee: Schema.Types.ObjectId,
    accomodation: String,
    arrival_date: Date,
    leaving_date: Date,
    meals:[Schema.Types.ObjectId],
    comments: String
})