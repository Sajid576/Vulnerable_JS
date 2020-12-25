const express = require('express');
const router  = express.Router();

const booksController=require('../controller/booksController');

router.post('/addNewBookToMongo',booksController.addBookToMongo);

router.get('/allBooksFromMongo',booksController.getAllBooksFromMongo);

router.post('/addExcelData',booksController.addExcelData);

module.exports=router;
