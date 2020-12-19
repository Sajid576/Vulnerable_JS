var csv = require('csvtojson'); 
var csvModel = require('../model/excel'); 

exports.excelStoreData=(req,res)=>
{
    csv()
    .fromFile("Excel.csv")
    .then((jsonObj)=>{
        console.log(jsonObj);
        csvModel.insertMany(jsonObj,(err,data)=>{  
                if(err){  
                    console.log(err);  
                }else{  
                    console.log(data); 
                }  
         }); 
    });
}