const express = require('express') ;
const router = express.Router();
const Dataroute = require('../controller/DataController');
const auth = require('../middleware/authintication');


//GET//

router.get('/Data', Dataroute.getDataPage) ;

//GET

//POST//

router.post('/Operations',auth.valid,Dataroute.GetOperationType) ;

//POST//

module.exports = router ;


