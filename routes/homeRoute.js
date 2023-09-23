const express = require('express');
const router = express.Router() ;

const home = require('../controller/homeController');
const middleware = require('../middleware/authintication');

//GET

router.get('/', home.GEThome );
router.get('/register' ,home.getsignup) ;
router.get('/login' , home.GETlogin) ;

//GET

//POST

router.post('/register', home.POSTsignup) ;
router.post('/logout' , middleware.valid ,home.postlogout);
router.post('/login',home.POSTlogin);

//POST

module.exports = router;