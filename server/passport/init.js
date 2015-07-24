var login = require('./login');
var signup = require('./signup');
var User = require('../models/userModel');

module.exports = function(passport){

    // Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        //console.log('serializing user: ');console.log(user);
        var sessionUser = { _id: user._id, username: user.username }
        done(null, sessionUser);
    });

    passport.deserializeUser(function(sessionUser, done) {
        /*
        User.findOne({'_id': id }, function(err, user) {
            //console.log('deserializing user:',user);
            done(err, user);
        });
        */
        done(null, sessionUser);
    });

    // Setting up Passport Strategies for Login and SignUp/Registration
    login(passport);
    signup(passport);

}