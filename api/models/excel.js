var mongoose  =  require('mongoose');  
  
var csvSchema = new mongoose.Schema({  
    Name:{  
        type:String  
    },  
    Age:{  
        type:Number  
    },  
    Address:{  
        type:String  
    }
});  
  
module.exports = mongoose.model('ExcelData',csvSchema);