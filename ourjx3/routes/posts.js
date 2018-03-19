var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var posts = require('../models/posts.js')
/* GET ALL postsS */
router.get('/', function(req, res, next) {
  posts.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


/* SAVE posts */
router.post('/', function(req, res, next) {
  posts.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE posts */
router.put('/:id', function(req, res, next) {
  posts.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE posts */
router.delete('/:id', function(req, res, next) {
  posts.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
