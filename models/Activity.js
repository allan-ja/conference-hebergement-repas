const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    name: { type: String },
    startDate: Date,
    endDate: Date,
    description: String,
    isMainActivity: Boolean,
    restriction: [String]
});

mongoose.model('activities', activitySchema);
