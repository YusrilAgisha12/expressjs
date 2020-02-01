var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login/index', { title: 'login'});
});


var users = require ("../model/users");
/**post check login */

router.post('/', async function(req,res) {
  const {body} =req;
  users.authLogin(body,function(err,result){
    res.send({
      result,
      error:err
    })
  })
})
module.exports = router;
