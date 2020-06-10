module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'you need to login first')
        res.redirect('/users/login')
    },
    verifyToken: (req, res, next) => {

        const BearerHeader = req.headers['authorization'];

        if (typeof BearerHeader !== 'undefined') {
            const bearer = BearerHeader.split(' ');
            const bearerToken = bearer[1];
            req.token = bearerToken;
            next();

        } else {
            res.sendStatus(403);
        }


    }
}