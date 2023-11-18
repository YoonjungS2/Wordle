var express = require('express');
var router = express.Router();

/* GET home page. */
//지역검색 페이지
router.get('/', function(req, res, next) {
  res.render('index', { title: '지역검색', pageName:'locals/search.ejs' });
});  // 서버가 오픈하는 경로가 /일 때 index.ejs를 불러와 렌더링

//즐겨찾기
router.get('/favorite', function(req, res) {
  res.render('index', {title:'즐겨찾기', pageName:'locals/favorite.ejs' });
});
module.exports = router;
