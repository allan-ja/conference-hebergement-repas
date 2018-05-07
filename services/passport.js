const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});


passport.use(
    new LocalStrategy(
        async (username, password, done) => {
            const existingUser = await User.findOne({
                email: username,
                password: password
            });

            if (existingUser) {
                return done(null, existingUser);
            }
            done(null, false);
        }
    )
);
        