var _ =           require('lodash')
    , User =      require('../models/userModel.js')
    , userRoles = require('../../app/assets/javascript/directives/routingConfig').userRoles;

module.exports = {
    index: function(req, res) {
        var users = User.findAll();
        _.each(users, function(user) {
            delete user.password;
            delete user.twitter;
            delete user.facebook;
            delete user.google;
            delete user.linkedin;
        });
        res.json(users);
    }
};