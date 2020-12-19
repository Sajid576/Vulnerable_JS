const express = require('express');
const router  = express.Router();

const contactController=require('../controller/contactController');



router.post('/storeUserContactData',contactController.storeContactData);

router.get('/getAllUserContactData/:num',contactController.getAllContactData);





module.exports=router;