var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogPostSchema = new Schema({
  title: String,
  created: String,
  contents: String
});

module.exports = mongoose.Schema('BlogPost', BlogPostSchema);