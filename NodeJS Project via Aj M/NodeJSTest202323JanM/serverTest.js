// Server
const http = require('http')
const portT = process.env.portT || 3000;

const app = require('./appTest');

const serverT = http.createServer(app);
serverT.listen(portT);

console.log('Server started on port:  ' + portT);

