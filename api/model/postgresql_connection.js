const { Pool, Client } = require('pg')

const connectionString='postgres://ueuussfr:KKHc_vSfnNsM_qsKkjla3BUxaFQeQs0l@kandula.db.elephantsql.com:5432/ueuussfr';
const pool = new Pool({
  connectionString,
})


/*
pool.query('Select * From contact', function(err, result, fields) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result['rows']);
    
  });
*/

  module.exports = pool;