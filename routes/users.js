var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  // res.send('respond with a resource');
  res.render('users', {name:"Phong Huynh"});
});

module.exports = router;
