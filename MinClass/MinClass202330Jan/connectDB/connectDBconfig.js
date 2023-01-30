const sql = require('mssql');

const sqlConnected = {
     user: 'sa',
     password: '4we_TAch',
     server: '192.168.1.231',
     database: 'ln_prod',
     options: {
          encrypt: false
     }
}
sql.connect(sqlConnected, (error) => {
     if (error) throw res.send(error);
     console.log('DB Connected');
});

module.exports = sqlConnected;