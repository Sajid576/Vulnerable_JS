const express = require('express');
const router  = express.Router();

const productController=require('../controller/productController');



router.post('/storeProductData',productController.storeProductData);

router.get('/getAllProductData',productController.getAllProductData);




module.exports=router;