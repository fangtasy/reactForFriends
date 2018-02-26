var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Ouhuang = require('../models/ouhuang.js')
/* GET ALL OuhuangS */
router.get('/', function(req, res, next) {
  Ouhuang.find({}).sort({date: -1}).exec(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


/* SAVE Ouhuang */
router.post('/', function(req, res, next) {
  Ouhuang.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Ouhuang */
router.put('/:id', function(req, res, next) {
  Ouhuang.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Ouhuang */
router.delete('/:id', function(req, res, next) {
  Ouhuang.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
