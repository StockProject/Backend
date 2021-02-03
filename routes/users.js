const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const {isNotLoggedIn, isLoggedIn} = require('./middlewares');

router.post('/register', isNotLoggedIn, async(req, res, next) => {
  const {userName, userEmail, userPassword, investType} = req.body;
  try{
    const exUser = await User.findOne({where: {userEmail}});

    if(exUser){
      console.log('이미 가입된 이메일');
      return res.json({success:false});
      // return res.redirect('/register');
    } else{
      console.time("암호화에 걸리는 시간");
      const hash = await bcrypt.hash(userPassword, 12);
      console.timeEnd("암호화에 걸리는 시간");
      await User.create({userName, userEmail, userPassword : hash, investType});
    }
    console.log("회원가입 성공");
    return res.json({success:true});
  }
  catch(error){
    console.log(error);
    next(error);
  }
});


router.post('/login', isNotLoggedIn, function(req, res, next) {
  const user = req.body;
  passport.authenticate('local', function(authError, user, info){
    if(authError){
      console.error(authError);
      return next(authError);
    }
    if(!user){
      console.log('오류!!!');
      console.log(info);
      return res.send(info.message);
    }
    return req.login(user, (err)=>{
      if(err) {
        console.error(err);
        return next(err);
      }
      console.log('로그인 성공');
      return res.json({userName: user.userName});
    });
  })(req,res,next);
});

router.get('/logout', isLoggedIn, function(req, res) {
  req.logout();
  console.log('로그아웃');
  req.session.destroy();
  return res.status(200).send('로그아웃');
});

module.exports = router;
