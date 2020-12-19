const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Types.ObjectId,
        
    },
    username: String,
    email: String,
    subject: String,
    message: String,
    
})

const contact = mongoose.model('Contact', contactSchema)
module.exports = contact