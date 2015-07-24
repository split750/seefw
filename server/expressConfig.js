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

  app.use(cookieParser('SuezEnvDTPEfW'));

  // Login set up
  /*
  app.use(expressSession({
      secret: 'SuezEnvDTPEfW',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection })
  }));
  
  */
  /* Login set up
  app.use(expressSession({
    secret: 'SuezEnvDTPEfW',
    resave: false,
    saveUninitialized: false
  }));
  */

  /*
  app.use(passport.initialize());
  app.use(passport.session());
  */

  var sessionOpts = {
    saveUninitialized: true, // saved new sessions
    resave: false, // do not automatically write to the session store
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    secret: 'SuezEnvDTPEfW',
    cookie : { httpOnly: true, maxAge: 2419200000 } // configure when sessions expires
  }

  app.use(session(sessionOpts));

  app.use(passport.initialize());
  app.use(passport.session());


  // Initialize Passport
  var initPassport = require('./passport/init');
  initPassport(passport);  

  /*
  var routes = require('./routes/index')(passport);
  app.use('/', routes);
  */

  var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
  };

};






