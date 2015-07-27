
//var app = require("./server/routes");

var express = require('express');
var app = express();
var path = require('path');



// Load Express Configuration
require('./server/expressConfig')(app, express);





// --------------------------------- //
//        Login requierments         //
// --------------------------------- //


var passport = require('passport');
//var localStrategy = require('passport-local').Strategy;

/*
// Passport does not directly manage your session, it only uses the session.
// So you configure session attributes (e.g. life of your session) via express
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
*/

/*
// user schema/model
var User = require('./server/models/userModel.js');

// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

*/



// --------------------------------- //
//              Routes               //
// --------------------------------- //


//require('./server/routes')(app);

require('./server/routes/user')(app); //user routes
require('./server/routes/note')(app); // note routes
require('./server/routes/category')(app); // category routes
require('./server/routes/wasteType')(app);
require('./server/routes/contractType')(app);
require('./server/routes/auth')(app, passport);


// Set engine template
app.engine('html', require('jade').renderFile);
app.set('view engine', 'html');


// Set app directory
app.use(express.static(path.join(__dirname, './app/')));



app.get('/', function(req, res){
    res.sendFile('index.html', { 
        root: path.join(__dirname, './app/views/'), 
        user: req.User,
        status: 'Hello !' 
    });
});


// error handlers
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});


// Create server
var port = process.env.PORT || 1337;
var server = require('http').createServer(app);


// Start the server
server.listen(port, function() {
 console.log('Listening on port : ' + port);
});






