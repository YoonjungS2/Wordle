// index.js > 사이트 첫 화면 구성
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '홈페이지', pageName:'home.ejs' });
}); // 루트 경로(/)로 접속하면 index 함수를 실행하도록 라우트 지정

module.exports = router;