const Book = require('../model/Book')
var csv = require('csvtojson');
var fs = require('fs');
//var { parse } = require('json2csv');
//const json2csv = require('json2csv').parse;
var newLine = '\r\n';
var fields = ['title', 'writer', 'category', 'price'];
//var fields = [, , , ];
//const opts = { fields };


exports.addBook = (req, res) => {
    let { title, writer, category, price } = req.body

    let book = new Book({
        title, writer, category, price
    })

    book.save()
        .then(b => {
            res.json(b)
            console.log(b)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error occured!'
            })
        })

    fs.stat('Excel.csv', function (err, stat) {
        var newRow = title + ", " + writer+ ", " + category+ ", " + price + newLine
            //var Csv = parse(book,opts) + newLine;
            fs.appendFile('Excel.csv', newRow, function (error) {
                if(error){
                    console.error(err);
                }
            });
            if(err){
                console.error(err);
            }
    });

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

exports.addExcelData = (req, res) => {
    var dbCount = 0;
    csv()
        .fromFile("Excel.csv")
        .then(jsonObj => {
            res.json(jsonObj);

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
                        } else {
                            console.log(data);
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
