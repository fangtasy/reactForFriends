const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const info = require('../models/info.js')

const _filter = {"pwd":0,"_v":0}
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
router.put('/updateInfo/:id', function(req, res, next) {
  info.findOneAndUpdate(req.params.id, req.body, function(err, post) {
      console.log(post)
    if (err) return next(err);
    const data=Object.assign({},{},req.body)
    return{code:0,data}
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
