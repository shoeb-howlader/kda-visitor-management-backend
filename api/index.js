var express = require('express');
var visitorRoute=require('../routeHandeler/visitorHandeler')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('Welcome to api');  
});

router.use('/visitor', visitorRoute);      

module.exports = router;
