/**********************************************/
/*               MONGOSSE MODEL               */
/**********************************************/

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstName: String,
    lastName: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    picture: String,
    role: String,
    attachment : String,
    mail: String,
    tel: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);

//module.exports = mongoose.model('Users', User);