const express = require('express');
const router  = express.Router();

const booksController=require('../controller/booksController');



router.post('/addNewBook',booksController.addBook);
router.get('/allBooks',booksController.getAllBooks);
router.post('/addNewBook',booksController.addExcelData);

module.exports=router;