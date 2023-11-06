const express = require('express') ;
const router = express.Router();
const Dataroute = require('../controller/DataController');
const auth = require('../middleware/authintication');


//GET//

router.get('/Data', Dataroute.getDataPage) ;


//GET

//POST//

router.post('/Operations',auth.valid,Dataroute.GetOperationType) ;
router.post('/Operations/table',auth.valid,Dataroute.POSTtable);
router.post("/meanValues",auth.valid,Dataroute.postMeanData);
router.post("/meanValues",auth.valid,Dataroute.postMeanData);

//POST//

module.exports = router ;


