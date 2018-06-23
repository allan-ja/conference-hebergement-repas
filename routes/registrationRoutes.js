const passport = require('passport');
const mongoose = require('mongoose');
const Registration = mongoose.model('registrations');

module.exports = function (app, db) {
    app.get('/api/registrations', async (req, res) => {
        const registrations = await Registration.find();
        res.send(registrations);
    });
    
    app.get('/api/registrations/:dojo', (req, res) => {
        Registration.find({dojo: req.params.dojo}, (err, registrations) => {
            res.send(registrations)
        })
    })

    app.post('/api/registrations', async (req, res) => {
        const registration = await Registration.findOne({ name: req.body.first_name});
        if (registration) { res.send("This regitration name already exists"); }
        else {
            const newRegistration = await new Registration(req.body).save();
            res.send(newRegistration)
        }
    });
};