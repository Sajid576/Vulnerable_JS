const express = require('express');
const router  = express.Router();

const NO_SQLI1Controller=require('../Security/NoSQLI/NO_SQLI1');
const NO_SQLI2Controller=require('../Security/NoSQLI/NO_SQLI2');
const NO_SQLI3Controller=require('../Security/NoSQLI/NO_SQLI3');

const SQLI1Controller=require('../Security/SQLI/SQLI1');
const SQLI2Controller=require('../Security/SQLI/SQLI2');
const SQLI3Controller=require('../Security/SQLI/SQLI3');

router.post('/postAttack',SQLI1Controller.getItems);

//router.get('/getAttack',booksController.getAllBooksFromMongo);

//router.put('/putAttack',booksController.addExcelData);

module.exports=router;
