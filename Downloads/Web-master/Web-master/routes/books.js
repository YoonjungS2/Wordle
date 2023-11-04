// Bin : 서버를 시작하고 관리하는 역할
// Public : 화면에 표시되는 이미지나 스타일 등을 지정
// Routes : 다양한 경로 및 라우팅 정의 (라우팅 : 사용자 요청을 처리하는 코드)
// Views : 웹페이지의 스타일, 레이아웃 등을 표시하고 꾸밈

var express = require('express');
var router = express.Router();

//router 만든 다음 ejs 만들기


/* 도서검색 page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName:'books/search.ejs' });
// 인덱스에 Search.ejs 만 전달하여 출력
});

//장바구니 페이지로 이동하는 라우터
router.get('/cart', function(req, res){ //books 생략
  res.render('index', {title:'장바구니', pageName:'books/cart.ejs'}); //index 나올것 같지않냐고 언급
});


module.exports = router;
