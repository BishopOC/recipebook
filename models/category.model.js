var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  title:{
    type:String,
    required: true
  }
});

categorySchema.pre('findOneAndUpdate', function(){
  this.update({}, {$set: { updated: Date.now() }});
});

var Category = mongoose.model('Category', categorySchema);
module.exports = Category;
