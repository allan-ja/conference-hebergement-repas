const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    name: { type: String, required: true, index: { unique: true }},
    startDate: Date,
    endDate: Date,
    description: String,
    restriction: [String]
});

mongoose.model('activities', activitySchema);
