
var _ = require('lodash');

var express = require('express');
var app = express();

var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;

var User = require('../models/userModel');

var bCrypt = require('bcrypt-nodejs');



module.exports = function(app, passport) {

    app.post('/user/register', function(req, res) {
        var userItem = req.body;
        console.log('Adding user: ' + JSON.stringify(userItem));
        
        
        /*
        User.register(new User(
        /*{
            username: req.body.username,
        }*/
        /*
        userItem), 
        req.body.password, function(err, account) {
            if (err) {
              return res.status(500).json({err: err})
            }
            passport.authenticate('local')(req, res, function () {
              return res.status(200).json({status: 'Registration successful!'})
            });
        });
        */
        passport.authenticate('signup', {
            
        })(req, res, function () {
              return res.status(200).json({status: 'Registration successful!'})
            }); 
    });

    /* Handle Registration POST */
    /*
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/home',
        failureRedirect: '/signup',
        failureFlash : true  
    }));
    */

    app.get('/user/login', function(req, res) {
        res.status(200).json({ user : req.user });
    });

    
    app.post('/user/login', function(req, res, next) {
      console.log('req : ' + req);
      console.log(user);

      passport.authenticate('login', function(err, user, info) {
        if (err) { return next(err) }
        if (!user) {
          return res.status(401).json({err: info})
        }
        req.login(user, function(err) {
          if (err) {
            return res.status(500).json({err: 'Could not log in user'})
          }
          res.status(200).json({status: 'Login successful!'})
        });
      })(req, res, next);
    });
    


    /* Handle Login POST */
    /*
    app.post('/user/login', passport.authenticate('login', {
        successRedirect: '/top',
        failureRedirect: '/ping',
        failureFlash : true  
    }));
    */

    app.get('/user/logout', function(req, res) {
      req.logout();
      res.status(200).json({status: 'Bye!'})
    });

};