const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    dojo: String,
    center: String,
    title: String,
    dojo_mission: String,
    age: Number,
    gender: String,
    languages: [String],
    email: String,
    main_activity: {
        class: String,
        subclass: String
    },
    extra_activities: [String],
    arrival_date: Date,
    leaving_date: Date,
    accomodation: String,
    meals:[{
        day: Date,
        meal: String,
        allergy: String
    }],
    comments: String
}, {timestamps: true})

const Registration = mongoose.model('registrations', registrationSchema);

module.exports = Registration;