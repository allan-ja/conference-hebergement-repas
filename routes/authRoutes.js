const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
    app.get('/', (req, res) => {
<<<<<<< HEAD
        res.send({name: 'Loged IN'})
    })
    
    app.get('/login',
        (req, res) => {
            res.send("Login page");
        });

    app.post(
      "/login",
      passport.authenticate("local", { failureRedirect: "/login" }),
      function(req, res) {
        res.redirect("/");
      }
=======
        res.send('Root page');
    });
    
    app.get('/login',
        (req, res) => {
            res.send('Login page');
        }
    );

    app.post('/login',
        passport.authenticate('local', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/');
        }
>>>>>>> 48559674fdd4cf01705ef17c7c5226ea8bce63b1
    );

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