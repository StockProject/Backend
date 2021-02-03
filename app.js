const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require("cors");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require("connect-flash");
const bodyparser = require('body-parser');

const passport = require('passport');
const passportConfig = require('./passport');
passportConfig(passport);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const {sequelize} = require('./models');
const app = express();
sequelize
    .sync()
    .then(()=>{console.log('DB connected!!!'); console.log('-----------------------------------------------------');})
    .catch(console.error);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors({ origin: "http://127.0.0.1", credentials: true }));

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOny: true,
      secure: false
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/auth', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


const sessionOption = {
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    },
    proxy: true,
};

if (process.env.NODE_ENV === "production") {
    sessionOption.proxy = true;
    sessionOption.cookie.secure = true;
 }

app.use(session(sessionOption));
app.use(flash());

module.exports = app;
