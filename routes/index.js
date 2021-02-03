var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    'success':true
  });
});
router.get('/test', function(req, res){
  res.status(200).json({
    "message":"test"
  });
});

router.post('/post_test', function(req,res){
  const user_message = req.body.message;
  res.status(200).json({
    "message":user_message
  });
})

module.exports = router;
