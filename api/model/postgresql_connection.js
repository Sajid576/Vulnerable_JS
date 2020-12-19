const { Pool, Client } = require('pg')

const connectionString='postgres://ueuussfr:KKHc_vSfnNsM_qsKkjla3BUxaFQeQs0l@kandula.db.elephantsql.com:5432/ueuussfr';
const pool = new Pool
({
  connectionString,
})



pool.query("INSERT INTO contact (uid,username,email,subject,message,createdat) VALUES (8,'H','h@gmail.com','QGTFR','Not Bad','2020-12-19')", function(err,result, fields) {
    if(err) {
       console.log('error running query', err);
    }
    console.log("1 record inserted");
    pool.end();


});

pool.query('Select * From contact', function(err, result, fields) {
    if(err) {
       console.log('error running query', err);
    }
    console.log(result['rows']);
    

  });


  module.exports = pool;