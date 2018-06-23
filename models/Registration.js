const mongoose = require('mongoose');
const Schema = mongoose.Schema;


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const registrationSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    dojo: String,
    center: String,
    title: String,
    dojo_mission: String,
    age: Number,
    gender: Boolean,
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