const express = require('express');
const router = express.Router();
const Category = require('../models/category.model.js');
const _ = require('lodash');
const signature = process.env.SIGNATURE || require('../secrets').SIGNATURE;
const expressJWT = require('express-jwt');
const auth = expressJWT({
  secret: signature,
  userProperty: 'payload'
});


router.get('/category', auth, function(req, res){
  Category.find({author: req.payload._id}, function (err, posts){
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

router.get('/category/:id', function(req, res){
  Category.find({_id: req.params.id}, function(err, post){
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

router.post('/category', function(req, res){
  var post = new Category(req.body);
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

router.put('/category/:id', auth, function(req, res){
  Category.findOneAndUpdate({_id: req.params.id, author: req.payload._id}, req.body, function(err, post){
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

router.delete('/category/:id', auth, function(req, res){
  Category.remove({_id: req.params.id, author: req.payload._id}, function(err, post){
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
