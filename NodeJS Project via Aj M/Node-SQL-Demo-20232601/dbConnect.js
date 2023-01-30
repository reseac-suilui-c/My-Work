const mysqlConnect = require('mysql');

// const connection = mysqlConnect.createConnection({
//      host: 'localhost',
//      user: 'mynode',
//      password: 'mynode',
//      database: 'mynodedb'
// });
const pool = mysqlConnect.createPool({
     // connectionLimit: 10;
     host: 'localhost',
     user: 'mynode',
     password: 'mynode',
     database: 'mynodedb'
});

module.exports = pool;