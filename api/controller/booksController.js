const Book = require('../model/Book')

exports.addBook = (req, res) => {
    console.log('sfsfsfsf')
    let { title, writer, category, price } = req.body

    let book = new Book({
        title, writer, category, price
    })

    console.log(book)

    book.save()
        .then(b => {
            res.json(b)
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
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error Occurred'
            })
        })
}
