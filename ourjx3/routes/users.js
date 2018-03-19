var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var User = require('../models/users.js')
/* GET ALL UserS */
const _filter = {"pwd":0,"__v":0}

router.get('/', function(req, res, next) {
  User.find({},_filter,function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE User BY ID */
router.post('/login', function(req, res, next) {
  const {id,pwd}=req.body;
  User.findOne({"id":id,"pwd":pwd},_filter, function (err, post) {
    if (!post) return res.json({code:1,msg:'incorrect id or password'});
    res.cookie("userid",post.id,{ expires: new Date(Date.now() + 3600000)})
    res.json({code:0,data:post});
  });
});

/* SAVE User */
router.post('/register', function(req, res, next) {
  
  const {id,pwd}=req.body;
  //console.log(req.body);
  User.findOne({"id":id},function(err,post){
    //console.log(id);
    if(post){return res.json({code:1,msg:'has registered'})}
    User.create(req.body, function (err, post) {
      if (err) return res.json({code:1, msg:'there is an error'});
      res.cookie("userid",post.id,{ expires: new Date(Date.now() + 3600000)});
      res.json({code:0});
    });
  })
  
});

/* UPDATE User */
router.put('/updateInfo', function(req, res, next) {
  const userid=req.cookie.userid
  if(!userid) {
    return json.dump({code:1})
  }
  User.findByIdAndUpdate(userid, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE User */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
