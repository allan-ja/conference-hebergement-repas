const Registration = require('../models/registration')

module.exports = function (app, db) {
    app.get('/api/registrations', (req, res) => {
        Registration.find((err, registrations) => {
            console.log(registrations);
            res.send(registrations)
        });
    });
    
    app.get('/api/registrations/:dojo', (req, res) => {
        Registration.find({dojo: req.params.dojo}, (err, registrations) => {
            res.send(registrations)
        })
    })


    app.post('/api/registrations', (req, res) => {
        console.log(req.body)
        var registration = new Registration(req.body);
        registration.save((err) => {
            if (err) throw err;
            console.log("saved sucessfully")
          });
        res.send(req.body)
    })
};