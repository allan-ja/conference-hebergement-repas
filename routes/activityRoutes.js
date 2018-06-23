const passport = require('passport');
const mongoose = require('mongoose');
const Activity = mongoose.model('activities');

module.exports = app => {
    // app.get('/api/activities', async (req, res) => {
    //     const activities = await Activity.find();
      
    // })

    app.post('/api/activity', async (req, res) => {
        const activity = await Activity.findOne({ name: req.body.name});
        if (activity) { res.send("This activity name already exists"); }
        else {
            const newActivity = await new Activity(req.body).save();
            res.send(newActivity)
        }
    });
};