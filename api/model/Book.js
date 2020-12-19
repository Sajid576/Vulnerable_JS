const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Types.ObjectId,
        
    },
    title: String,
    writer: String,
    category: String,
    price:{
        type: Number,
        default:0
    }
    
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book