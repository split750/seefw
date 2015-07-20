
//var app = require("./server/routes");

var express = require('express');
var app = express();
var path = require('path');


// --------------------------------- //
//        Login requierments         //
// --------------------------------- //

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


app.use(require('express-session')({
    secret: 'SuezEnvDTPEfW secret',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// passport config
var Account = require('./server/models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());





// Load Express Configuration
require('./server/expressConfig')(app, express);


// Load routes
require('./server/routes/user')(app); //user routes
require('./server/routes/note')(app); // note routes
require('./server/routes/category')(app); // category routes
require('./server/routes/wasteType')(app);
require('./server/routes/contractType')(app);
require('./server/routes/auth')(app);



app.use(express.static(path.join(__dirname, './app/')));


app.get('/', function(req, res){
  res.sendFile('index.html', { root: path.join(__dirname, './app/views/') });
});


// Create server
var port = process.env.PORT || 1337;
var server = require('http').createServer(app);


// Start the server
server.listen(port, function() {
 console.log('Listening on port : ' + port);
});






