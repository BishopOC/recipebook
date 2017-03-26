var express = require('express');
var router = express.Router();
var Post = require('../models/post.model.js');


router.get('/posts', function(req, res){
  Post.find({}, function (err, posts){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        posts: posts
      });
    }
  });
});

router.get('/posts/:id', function(req, res){
  Post.find({_id: req.params.id}, function(err, post){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        posts: post
      });
    }
  });
});

router.post('/posts', function(req, res){
  var post = new Post(req.body);
  post.save(function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'successfully posted'
      });
    }
  });
});

router.put('/posts/:id', function(req, res){
  Post.findOneAndUpdate({_id: req.params.id}, req.body, function(err, posts){
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

router.delete('/posts/:id', function(req, res){
  Post.remove({_id: req.params.id}, function(err){
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
