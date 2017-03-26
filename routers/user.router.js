var express = require('express');
var router = express.Router();
var User = require('../models/user.model');

router.post('/signup', function(req, res){
  var user = new User(req.body);
  user.save(function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'successfully signed up'
      })
    }
  });
});
router.post('/login', function(req, res){
  res.status(200).json({
    msg: 'logged in'
  });
});
router.get('/users', function(req, res){
  User.find({}, function(err, users){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: users
      });
    }
  });
});
router.get('/users/:id', function(req, res){
  User.find({_id: req.params.id}, function(err, users){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: users
      });
    }
  });
});
router.put('/users/:id', function(req, res){
  User.findOneAndUpdate({_id: req.params.id}, req.body, function(err, users){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'successfully updated'
      });
    }
  });
});
router.delete('/users/:id', function(req, res){
  User.delete({_id: req.params.id}, function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'successfully deleted'
      });
    }
  });
});

module.exports = router;
