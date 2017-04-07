const express = require('express');
const router = express.Router();
const Post = require('../models/post.model.js');
const _ = require('lodash');
const signature = process.env.SIGNATURE || require('../secrets').SIGNATURE;
const expressJWT = require('express-jwt');
const auth = expressJWT({
  secret: signature,
  userProperty: 'payload'
});


router.get('/posts', auth, function(req, res){
  Post.find({author: req.payload._id}, function (err, posts){
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

router.put('/posts/:id', auth, function(req, res){
  Post.findOneAndUpdate({_id: req.params.id, author: req.payload._id}, req.body, function(err, posts){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else if (!post){
      res.status(403).json({
        msg: 'unauthorized'
      });
    } else {
      res.status(200).json({
        msg: 'successfully updated post'
      });
    }
  });
});

router.delete('/posts/:id', auth, function(req, res){
  Post.remove({_id: req.params.id, author: req.payload._id}, function(err, post){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else if(!post){
      res.status(403).json({
        msg: 'Unauthorized'
      });
    } else {
      res.status(200).json({
        msg: 'successfully deleted'
      });
    }
  });
});

module.exports = router;
