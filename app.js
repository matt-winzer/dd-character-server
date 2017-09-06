const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const character = require('./routes/character')

const app = express();

// ------------------ INITIAL SETUP ------------------


const knex = require('./db/knex');
const jwt = require('jsonwebtoken');

// Bring in Passport and the Facebook OAuth Strategy
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

// Require dotenv to use environment variables
require('dotenv').config();


// ------------------ PASSPORT FACEBOOK OAUTH 2.0 ------------------


// Configure the Facebook strategy
passport.use(new FacebookStrategy(
  // filling in the blanks on the FB strategy
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    profileFields: ['id', 'email']
  },

  // after both API calls were made
  function onSuccessfulLogin(token, refreshToken, profile, done) {
    // User has successfuly logged in through FB
    // Run this code

    // Capture email to use in database queries
    let email = profile.emails[0].value;

    // Query database for user that has just logged in through Facebook
    knex('player')
      .where('email', email)
      .then(user => {
        // If user does not exist in database, create new record
        if (user.length === 0) {
          knex('player')
            .insert({email, token})
            .returning('*')
            .then(newUser => {
              // Pass user info to callback route
              // done function first parameter/argument is error
              done(null, {
                user: newUser[0],
                token: token
              })
            })
        }
        // If user already exists in database, pass their info on to callback route
        else {
          done(null, {
            user: user[0],
            token: token
          })
        }
      })
      .catch(err => {
        console.log(err);
        done(err);
      })

  }
));

app.use(passport.initialize());

// ROUTE 1: Initial route for logging in through Facebook
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

// ROUTE 2: Callback route that executes after a successful login w/Facebook
app.get('/auth/facebook/callback', (req, res, next) => {
  passport.authenticate('facebook', (err, data) => {
    console.log(data);
    let user = data.user;
    delete user.password;
    // delete user.username;

    let token = jwt.sign(user, process.env.JWT_SECRET);
    res.redirect(`/logged/?token=${token}`);
  })(req, res, next)
});


// ------------------ END PASSPORT FACEBOOK OAUTH 2.0 ------------------






// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/character', character)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
