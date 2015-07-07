var _ = require('lodash');

var usersModel = require('../models/userModel');

var plantsModel = require('../models/plantModel');

var categoriesModel = require('../models/category');


module.exports = function(app) {
  
  app.get('/users', function(req, res) {
    console.log('Search users');
    usersModel.find(function foundUsers(err, items) {
      res.send(items);
    });
    //res.json(Note.all());
    //getNotes(res);
  });

  app.post('/users', function(req, res) {
    var userItem = req.body;
    console.log('Adding user: ' + JSON.stringify(userItem));
    res.json(usersModel.create(userItem), function savedUsers(err) {
      if(err) {
        throw err;
        res.send({'error':'An error has occurred'});
      } else {
        console.log('saved user !');
        res.send({'success':'saved !'});
      }
    });
  });

  app.put('/users/:id', function(req, res) {
    var id = req.params.id;
    var userItem = req.body;
    
    delete userItem._id;
    
    console.log('Updating user: ' + id);
    console.log('line 42 : ' + JSON.stringify(userItem));

    usersModel.update({'_id': id}, userItem, function(err) {
        if (err) {
            console.log('Error updating user: ' + err);
            res.send({'error':'An error has occurred'});
        } else {
            console.log(userItem.title + ' user document(s) updated');
            res.send(userItem);
        }
    });

  });


  app.get('/users/:id', function(req, res) {
    var userId = req.params.id;
    console.log('Retrievong user : ' + userId);
    usersModel.findOne({'_id': userId }, function foundUsers(err, items) {
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      } else {
        res.send(items);
      };
    });
  });


  app.delete('/users/:id', function(req, res) {
    
    var id = req.params.id;
    console.log('Deleting user: ' + id);
    
    usersModel.remove({'_id': id}, function(err) {
        if (err) {
            res.send({'error':'An error has occurred - ' + err});
        } else {
            console.log('user '+ id + ' document(s) deleted');
            res.send(req.body);
        }
    });

  });
};


