var mongoose  =  require('mongoose');  
  
var csvSchema = new mongoose.Schema({  
    Price:{  
        type:Number  
    },  
    Tittle:{  
        type:String  
    },  
    Writer:{  
        type:String  
    },  
    Catagory:{  
        type:String  
    }
});  
  
module.exports = mongoose.model('ExcelData',csvSchema);