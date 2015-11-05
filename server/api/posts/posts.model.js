'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostsSchema = new Schema({
  name: String,
  src:String
  owner:String
});

module.exports = mongoose.model('Posts', PostsSchema);
