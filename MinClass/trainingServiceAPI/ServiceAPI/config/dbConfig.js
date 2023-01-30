const sql = require('mssql')
const sqlConfig = {
    user: 'sa',
    password: '4we_TAch',
    server: '192.168.1.231',
    database: 'ln_prod',
    options: {
        encrypt: false
    }
}
let connection = sql.connect(sqlConfig, (err) => {
    if (err) { console.log(err); }
    else { console.log('DataBase Connected') }
})

module.exports = connection
