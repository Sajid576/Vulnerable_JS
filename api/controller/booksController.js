const Book = require('../model/Book')
var csv = require('csvtojson'); 

exports.addBook = (req, res) => {
    let { title, writer, category, price } = req.body

    let book = new Book({
        title, writer, category, price
    })

    console.log(book)

    book.save()
        .then(b => {

            
            res.json(b)
            console.log(b)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message:'Error occured!'
            })
    })
    
}


exports.getAllBooks = (req, res) => {
    Book.find()
        .then(book => {
            res.json(book)
            // addExcelData(res)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error Occurred'
            })
        })
}

exports.addExcelData=(req,res)=>
{
    
    csv()
    .fromFile("Excel.csv")
    .then(jsonObj=>{
        res.json(jsonObj);
        // let { title, writer, category, price } = jsonObj[0]
        // let book = new Book({
        //     title, writer, category, price
        // })
        
        Book.insertMany(jsonObj,(err,data)=>{  
                if(err){  
                    console.log(err);  
                }else{  
                    console.log(data); 
                }  
         }); 
    //     book.save()
    //     .then(b => {
    //         res.json(b)
    //         console.log(b)
    //     })
    //     .catch(e => {
    //         console.log(e)
    //         res.json({
    //             message:'Error occured!'
    //         })
    // })
    })
        .catch(e => {
        console.log(e)
    })
}
