
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Types.ObjectId,
        
    },
    username: String,
    password: String,
    age: Number,
   
    
})

const User = mongoose.model('User', userSchema)
module.exports = User