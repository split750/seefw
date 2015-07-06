/**********************************************/
/*               MONGOSSE MODEL               */
/**********************************************/

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
    firstName: String,
    lastName: String,
    picture: String,
    role: String,
    attachment : String,
    mail: String,
    tel: String
});

module.exports = mongoose.model('Users', User);