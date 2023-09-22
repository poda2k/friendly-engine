const express = require('express') ;
const router = express.Router();
const Dataroute = require('../controller/DataController');


//GET//

router.get('/Data', Dataroute.getDataPage) ;

//GET

//POST//

router.post('/Operations',Dataroute.GetOperationType) ;

module.exports = router ;


