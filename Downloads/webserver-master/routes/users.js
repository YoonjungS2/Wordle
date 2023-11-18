var express = require('express');
var router = express.Router();
// 데이터 출력

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource'); //데이터 전송
});

//로그인페이지 이동
router.get('/login', function(req, res, next){
  res.render('index', {title:'로그인', pageName:'users/login.ejs'}); //데이터 렌더
}); // login 경로를 요청할 때 index템플릿에 로그인이라는 제목과 users/login.ejs에서 지정한 페이지 반환

//회원가입페이지 이동
router.get('/join', function(req, res, next){
  res.render('index', {title:'회원가입', pageName:'users/join.ejs'});
});

//마이페이지 이동
router.get('/mypage', function(req, res){
  res.render('index', {title: '마이페이지', pageName:'users/mypage.ejs'});
})

module.exports = router;