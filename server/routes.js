var path = require('path');

// Load Express Configuration
//require('./expressConfig')(app, express);


// Load routes
require('./routes/user'); //user routes
require('./routes/note'); // note routes
require('./routes/category'); // category routes
require('./routes/wasteType');
require('./routes/contractType');
require('./routes/auth');


//module.exports = app;
