var express = require('express');
var router = express.Router();
/* GET users listing. */




router.get('/', function(req, res, next) {


  res.sendfile('./public/band.html');
});

module.exports = router;
