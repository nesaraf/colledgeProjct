const localStrategy = require('passport-local').Strategy;
const encrypt = require('crypto-js/sha256');
const User = require('../models/user.model');

module.exports = (passport) => {

    passport.use(new localStrategy({ usernameField: 'email' },
        (email, password, done) => {

            User.findOne({ email: email }, (err, user) => {

                if (err) {

                    return done(err);

                }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (user.password != encrypt(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            });
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

}
