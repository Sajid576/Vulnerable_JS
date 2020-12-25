const Book = require('../model/Book')
var csv = require('csvtojson');
var fs = require('fs');
var newLine = '\r\n';
var ObjectId = require('mongodb').ObjectID;

exports.addBookToMongo = (req, res) => {
    let { title, writer, category, price } = req.body

    let id = new ObjectId();

    let book = new Book({
        _id: new ObjectId(id),
        title, writer, category, price
    })

    book.save()
        .then(b => {
            fs.stat('Excel.csv', function (err, stat) {
                var newRow =id+", "+ title + ", " + writer+ ", " + category+ ", " + price + newLine
                    //var Csv = parse(book,opts) + newLine;
                    fs.appendFile('Excel.csv', newRow, function (error) {
                        if(error){
                            console.error(err);
                            res.json(err);
                        }
                        else{
                            console.log(b);
                            res.json(b);
                            
                        }
                        
                    });
                    
            });

            
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error occured!'
            })
        })

    

}


exports.getAllBooksFromMongo = (req, res) => {
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

exports.addExcelData = (req, res) => {
    var dbCount = 0;
    csv()
        .fromFile("Excel.csv")
        .then(jsonObj => {
           

            var excelCount = Object.keys(jsonObj).length;
            //console.log(excelCount);

            Book.find()
                .then(book => {
                    //res.json(book)
                    dbCount = Object.keys(book).length;
                    //console.log(dbCount);
                    jsonObj = jsonObj.slice(dbCount, excelCount)
                    Book.insertMany(jsonObj, (err, data) => {

                        if (err) {
                            console.log(err);
                            res.json(err);
                        } else {
                            console.log(data);
                            res.json(data);
                        }
                    });

                })
                .catch(e => {
                    console.log(e)
                    res.json({
                        message: 'Error Occurred'
                    })
                })


        })
        .catch(e => {
            console.log(e)
        })



}
