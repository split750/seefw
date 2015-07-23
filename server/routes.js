var express = require('express');
var app = express();
var path = require('path');

// Load Express Configuration
//require('./expressConfig')(app, express);


// Load routes
require('./routes/user')(app); //user routes
require('./routes/note')(app); // note routes
require('./routes/category')(app); // category routes
require('./routes/wasteType')(app);
require('./routes/contractType')(app);
require('./routes/auth')(app);


//module.exports = app;
