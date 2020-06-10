const express = require("express");
const encrypt = require('crypto-js/sha256');
const router = express.Router();
const User = require('../models/user.model');
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/login', (req, res) => res.render('login'));

router.post('/api/login', async (req, res, next) => {

    console.log(req.body);
    passport.authenticate('local', async (err, user, info) => {
        try {
            if (err || !user) {
                return next(err);
            }
            req.login(user, { session: false }, async (error) => {
                if (error) return next(error)

                const body = { _id: user._id, email: user.email };

                const token = jwt.sign({ user: body }, 'blalalbalbal', { expiresIn: '30s' });

                return res.json({ token, body: body._id });
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
});
router.get('/register', (req, res) => res.render('register'));

router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let er = [];

    if (!name || !email || !password || !password2) {
        er.push({ msg: "Please fill the form Completly" })
    }
    if (password !== password2) {
        er.push({ msg: "Passwords do not mutch" });
    }
    if (password.length < 6) {
        er.push({ msg: 'Password must be 6 characters' })
    }

    if (er.length > 0) {
        res.render('register', {
            er,
            name,
            email,
            password,
            password2
        });
    } else {


        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    er.push({ msg: "Email is already taken" })
                    res.render('register', {
                        er,
                        name,
                        email,
                        password,
                        password2
                    })
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    })

                    newUser.password = encrypt(password);
                    req.flash('success_msg', "You are registered");
                    newUser.save()
                        .then(user => { res.redirect('login') })
                        .catch(error => console.log(error))
                }
            })
    }
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/data/read',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);

});

router.get('/logout', (req, res) => {
    req.logOut();
    req.flash('success_msg', 'you are logged out')
    res.redirect('/users/login');
})

module.exports = router;