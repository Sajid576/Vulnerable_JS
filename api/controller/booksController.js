
const Book = require('../model/Book');
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
    console.log("inserting data into MongoDB");
    book.save()
        .then(b => {
            fs.stat('Excel.csv', function (err, stat) {
                console.log("inserting data into CSV");
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
    
exports.getBook = (req, res) => {
  let id = req.params.id;
  Book.findById(id)
    .then((b) => {
      res.json(b);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error Occurred",
      });
    });
};

exports.getBookByWriter = (req, res) => {
    console.log('sfsfs', req.body.writer)
//   let writerX = req.body.writer;
  Book.find({ 'writer': req.body.writer })
    .then((b) => {
      res.json(b);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error Occurred",
      });
    });
};

exports.getBookByWriter = (req, res) => {
  console.log("sfsfs", req.body.writer);
  //   let writerX = req.body.writer;
  Book.find({ writer: req.body.writer })
    .then((b) => {
      res.json(b);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error Occurred",
      });
    });
};

// exports.getBookByWriter = (req, res) => {
//   console.log("sfsfs");
//     let writerX = req.body.writer;
//     // {'email': { $in: [email] }
//     Book.findOne({ writer: { $in: [writerX] } } )
//     .then((b) => {
//       res.json(b);
//     })
//     .catch((e) => {
//       console.log(e);
//       res.json({
//         message: "Error Occurred",
//       });
//     });
// };
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
    let { title, writer, category, price } = req.body

    let id = new ObjectId();

    let book = new Book({
        _id: new ObjectId(id),
        title, writer, category, price
    })
    fs.stat('Excel.csv', function (err, stat) {
        console.log("inserting data into CSV");
        var newRow =id+", "+ title + ", " + writer+ ", " + category+ ", " + price + newLine
            //var Csv = parse(book,opts) + newLine;
            fs.appendFile('Excel.csv', newRow, function (error) {
                if(error){
                    console.error(err);
                    res.json(err);
                }
                else{
                    console.log("inserting data into MongoDB");
                    book.save()
                        .then(b => {
                            console.log(b)
                            res.json(b)
                        })
                        .catch(e => {
                            console.log(e)
                            res.json({
                                message: 'Error occured!'
                            })
                        })   
                } 
            });     
    });
}

exports.deleteBook = (req, res) => {
    // console.log("hlw")
  let { id } = req.params;
  Book.findOneAndDelete({
    _id: id,
  })
    .then((book) => {
      res.json(book);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error Occurred",
      });
    });
};