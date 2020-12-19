var csv = require('csvtojson'); 
var csvModel = require('../models/excel'); 

exports.storeExcelData=()=>
{
    //const Csv=require('csvtojson')

    console.log("helo2");
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