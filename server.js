
//var app = require("./server/routes");

var express = require('express');
var app = express();
var path = require('path');



// --------------------------------- //
//        Login requierments         //
// --------------------------------- //

var passport = require('passport');
var localStrategy = require('passport-local').Strategy;


// Load Express Configuration
require('./server/expressConfig')(app, express);


// Load routes
require('./server/routes/user')(app); //user routes
require('./server/routes/note')(app, passport); // note routes
require('./server/routes/category')(app); // category routes
require('./server/routes/wasteType')(app);
require('./server/routes/contractType')(app);
require('./server/routes/auth')(app);


// user schema/model
var User = require('./server/models/user2.js');

// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use(express.static(path.join(__dirname, './app/')));

app.engine('html', require('jade').renderFile);
app.set('view engine', 'html');


app.get('/', function(req, res){
  res.sendFile('index.html', { root: path.join(__dirname, './app/views/') });
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






