
var csv = require('csvtojson');
var fs = require('fs');
var newLine = '\r\n';

exports.storeNoSQLCSV=(csvModel)=>{
    const fileName= 'nosql_excel.csv';
    fs.stat(fileName, function (err, stat) {
               
            var newRow =csvModel.query+ ", " + JSON.stringify(csvModel.response) + newLine
            //var Csv = parse(book,opts) + newLine;
            fs.appendFile(fileName, newRow, function (error) {
                if(error){
                    console.error(err);
                    res.json(err);
                }
                else{
                    console.log(newRow);
                    
                    
                }
                
            });
            
    });
}

exports.storeSQLCSV=(csvModel)=>{
    const fileName= 'sql_excel.csv';
    fs.stat(fileName, function (err, stat) {
               
            var newRow =csvModel.query+ ", " + JSON.stringify( csvModel.response) + newLine
            //var Csv = parse(book,opts) + newLine;
            fs.appendFile(fileName, newRow, function (error) {
                if(error){
                    console.error(err);
                    res.json(err);
                }
                else{
                    console.log(newRow);
                    
                    
                }
                
            });
            
    });
}