const expect = require('chai').expect;
const Registration = require('../models/registration')

const regitstrations_test = [

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
}
]