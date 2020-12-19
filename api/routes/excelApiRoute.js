const express = require('express');
const router  = express.Router();

const excelController=require('../controller/excelController');

router.post('/storeExcelData',excelController.storeExcelData);

//router.get('/getAllUserContactData',contactController.getAllContactData);

module.exports=router;