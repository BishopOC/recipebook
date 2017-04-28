var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  title:{
    type:String,
    required: true
  },
  body:{
    type:String,
    required: true
  },
  created:{
    type: Date
  },
  updated:{
    type: Date
  },
  author: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    type: String,
  }
});

postSchema.pre('findOneAndUpdate', function(){
  this.update({}, {$set: { updated: Date.now() }});
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
