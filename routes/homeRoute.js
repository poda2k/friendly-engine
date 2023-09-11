const express = require('express');
const router = express.Router() ;

const home = require('../controller/homeController');

//GET

router.get('/', home.GEThome );
router.get('/register' ,home.getsignup) ;
router.get('/login' , home.GETlogin) ;

//GET

//POST

router.post('/register', home.POSTsignup) ;

//POST

module.exports = router;