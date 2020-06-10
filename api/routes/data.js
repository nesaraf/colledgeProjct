const express = require("express");
const router = express.Router();
const { verifyToken } = require('../config/auth');
const jwt = require('jsonwebtoken');

router.get('/read', verifyToken, (req, res) => {
    jwt.verify(req.token, 'blalalbalbal', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Read Now',
                authData
            });
        }
    });



    // router.get('/read', , (req, res) => res.render('read', {
    //     user: req.user.name
});
module.exports = router;