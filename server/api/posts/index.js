'use strict';

var express = require('express');
var controller = require('./posts.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/allPosts/:user', controller.userPosts);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:name', controller.destroy);

module.exports = router;
