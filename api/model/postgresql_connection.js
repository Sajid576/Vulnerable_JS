const { Pool, Client } = require('pg')

const connectionString='postgres://ueuussfr:KKHc_vSfnNsM_qsKkjla3BUxaFQeQs0l@kandula.db.elephantsql.com:5432/ueuussfr';
const pool = new Pool
({
  connectionString,
})

module.exports = pool;

pool.query("INSERT INTO contact (uid,username,email,subject,message,createdat) VALUES (8,'H','h@gmail.com','QGTFR','Not Bad','2020-12-19')", function(err,result, fields) {
    if(err) {
      return console.error('error running query', err);
    }
    return console.log("1 record inserted");
    pool.end();
  });
