var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var info = require('../models/info.js')
/* GET ALL infoS */
router.get('/', function(req, res, next) {
  info.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE info BY ID */
// router.get('/:id', function(req, res, next) {
//   info.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
router.get('/:uid', function(req, res, next) {
  info.findOne({"id":req.params.uid}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE info */
router.post('/', function(req, res, next) {
  info.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE info */
router.put('/:id', function(req, res, next) {
  info.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE info */
router.delete('/:id', function(req, res, next) {
  info.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
