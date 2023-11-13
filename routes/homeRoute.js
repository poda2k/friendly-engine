const express = require('express');
const router = express.Router() ;


const home = require('../controller/homeController');
const middleware = require('../middleware/authintication');
const passport = require('passport');

//GET

router.get('/',middleware.valid, home.GEThome );
router.get('/register',middleware.validForLogin ,home.getsignup) ;
router.get('/login',middleware.validForLogin , home.GETlogin) ;

//GET

//POST

router.post('/register' ,home.POSTsignup ) ;
router.post('/logout' , middleware.valid ,home.postlogout);
router.post('/login',passport.authenticate('local',{failureRedirect:'/false',successRedirect:'/'}));

//POST

module.exports = router;