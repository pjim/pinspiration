'use strict';

var _ = require('lodash');
var Posts = require('./posts.model');

// Get list of postss
exports.index = function(req, res) {
  Posts.find(function (err, postss) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(postss);
  });
};

// Get a single posts
exports.show = function(req, res) {
  Posts.findById(req.params.id, function (err, posts) {
    if(err) { return handleError(res, err); }
    if(!posts) { return res.status(404).send('Not Found'); }
    return res.json(posts);
  });
};

// Creates a new posts in the DB.
exports.create = function(req, res) {
  Posts.create(req.body, function(err, posts) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(posts);
  });
};

// Updates an existing posts in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Posts.findById(req.params.id, function (err, posts) {
    if (err) { return handleError(res, err); }
    if(!posts) { return res.status(404).send('Not Found'); }
    var updated = _.merge(posts, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(posts);
    });
  });
};

// Deletes a posts from the DB.
exports.destroy = function(req, res) {
  Posts.findById(req.params.id, function (err, posts) {
    if(err) { return handleError(res, err); }
    if(!posts) { return res.status(404).send('Not Found'); }
    posts.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}