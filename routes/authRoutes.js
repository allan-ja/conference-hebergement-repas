const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
    app.get('/login',
        (req, res) => {
            res.send({
                login: req.body.username
            });
        });

    app.post('/login', (req, res, next) => {
        passport.authenticate('local',
    (err, user, info) => {
        console.log(err);
        console.log(user);
        console.log(info);
    }),
        (req, res) => {
            res.send('Howowow')
        }
    })

    app.get('/login', function (req, res, next) {
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.redirect('/login');
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                return res.redirect('/users/' + user.username);
            });
        })(req, res, next);
    });

    app.post('/signup', (req, res) => {
        console.log(req.body);
        const newUser = new User(req.body);
        newUser.save((err) => {
            if (err) throw err;
            console.log("saved sucessfully")
        });
        res.send(req.body)

    })


    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};