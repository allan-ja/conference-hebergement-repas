module.exports = function (app, db) {
    app.get('/registrations', (req, res) => {
        res.send('API ok');
    });

    app.post('/registrations', (req, res) => {
        console.log(req.body)
        var registration = new Registration(req.body);
    })
};