const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const info = require('../models/info.js')

const _filter = {"pwd":0,"_v":0}

router.get('/', function(req, res, next) {
  info.find(function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.get('/person', function(req, res, next) {
  info.findOne({"id":req.cookies.userid}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
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
  console.log(req.cookies.userid)
  info.findOneAndUpdate({"id":req.cookies.userid}, req.body,  function(err, post) {
      console.log('update',post,req.cookies.userid)
    if (err) return next(err);
    const data=Object.assign({},{},req.body)
    return{code:0,data}
  });
});

/* DELETE info */
router.delete('/:id', function(req, res, next) {
  info.findOneAndRemove({"id":req.cookies.userid}, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
