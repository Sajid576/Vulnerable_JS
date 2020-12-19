const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
    title: String,
    writer: String,
    category: String,
    price:{
        type: Number,
        default:0
    }
    
})

const Book = model('Book', bookSchema)
module.exports = Book