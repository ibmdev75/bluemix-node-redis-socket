var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
var obj = {
    title: 'Xebia',
    provider:'IBM',
    useJade:true
}
  res.render('index',obj);
});

module.exports = router;
