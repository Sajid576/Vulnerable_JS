
var csv = require('csvtojson');
var fs = require('fs');
var newLine = '\r\n';

exports.csvStore=(csvModel)=>{
    fs.stat('Excel.csv', function (err, stat) {
               
            var newRow =csvModel.query+ ", " + csvModel.response + newLine
            //var Csv = parse(book,opts) + newLine;
            fs.appendFile('Excel.csv', newRow, function (error) {
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