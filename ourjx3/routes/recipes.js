var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Recipes = require('../models/recipes.js')
/* GET ALL RecipesS */
router.get('/', function(req, res, next) {
  Recipes.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


/* SAVE Recipes */
router.post('/', function(req, res, next) {
  Recipes.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* DELETE Recipes */
router.delete('/:id', function(req, res, next) {
  Recipes.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
