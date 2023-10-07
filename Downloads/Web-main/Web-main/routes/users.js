var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//로그인페이지 이동
router.get('/login', function(req, res, next){
  res.render('index', {title:'로그인', pageName:'users/login.ejs'});
});

//회원가입페이지 이동
router.get('/join', function(req, res, next){
  res.render('index', {title:'회원가입', pageName:'users/join.ejs'});
});

module.exports = router;