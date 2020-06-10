const express = require('express');
const cors = require('cors');
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session')
const mongoose = require('mongoose');
//routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const refRouter = require('./routes/references');
const readRouter = require('./routes/data');

const passport = require('passport');

require('./config/passport')(passport);
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// local middleware
app.use((req, res, next) => {
    res.locals.error_msg = req.flash('error_msg');
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error = req.flash('error');
    next();
})
app.set('view engine', 'ejs');

app.use(expressLayouts);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/info', refRouter);
app.use('/data', readRouter);




const uri = process.env.DB_URI;

try {
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log("Database connection established ");
    });

} catch (error) {
    console.log(error)
}






app.listen(port, () => {
    console.log(`server has started on port: ${port}`);

});