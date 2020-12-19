const express = require('express');
const router  = express.Router();

const excelStoreController=require('../controller/excelController');

router.post(excelStoreController.excelStoreData);

module.exports=router;

