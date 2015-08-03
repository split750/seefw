var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var http = require('http');
var path = require('path');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');
var hash = require('bcrypt-nodejs');
var MongoStore = require('connect-mongo')(expressSession);
var cookieSession = require('cookie-session');
var csrf = require('csurf');


/********* DATABASE - MONGOLAB CONNECTION ********/

var mongoose = require('mongoose');               // mongoose for mongodb
var database = require('./database');      // load the database config

mongoose.connect(database.url);   // connect to mongoDB database on modulus.io

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));  
 
var dbOpened = db.once('open', function() {
    // Wait for the database connection to establish, then start the app.  
    console.log('connection to mongolab OK');   
});




module.exports = function(app, express) {
  // Serve static assets from the app folder. This enables things like javascript
  // and stylesheets to be loaded as expected. You would normally use something like
  // nginx for this, but this makes for a simpler demo app to just let express do it.
  /*
  app.use("/", express.static(path.join(__dirname, '../app/')));
  */

  /*
  // Set the view directory, this enables us to use the .render method inside routes
  app.set('views', path.join(__dirname, '../app/views'));
  */

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // parse application/json
  app.use(bodyParser.json());

  app.use(logger('dev'));
  app.use(methodOverride());

  app.use(cookieParser());

  app.use(expressSession(
    {
        saveUninitialized: true, // saved new sessions
        resave: false, // do not automatically write to the session store
        secret: process.env.COOKIE_SECRET || "SuezEnvDTPEfW",
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    }));

  var env = process.env.NODE_ENV || 'development';
  if ('development' === env || 'production' === env) {
      app.use(csrf());
      app.use(function(req, res, next) {
          res.cookie('XSRF-TOKEN', req.csrfToken());
          next();
      });
  }

  /*
  var sessionOpts = {
    saveUninitialized: true, // saved new sessions
    resave: false, // do not automatically write to the session store
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    secret: 'SuezEnvDTPEfW',
    cookie : { httpOnly: true, maxAge: 2419200000 } // configure when sessions expires
  }

  app.use(expressSession(sessionOpts));
  */

  app.use(passport.initialize());
  app.use(passport.session());


  // Initialize Passport
  var initPassport = require('./passport/init');
  initPassport(passport);  


};






