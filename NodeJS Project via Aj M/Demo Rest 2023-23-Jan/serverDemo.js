const http = require('http');
const portD = process.env.portD || 3000;
const appD = require('./AppDemo');
const serverD = http.createServer(appD);
serverD.listen(portD);

console.log('Server Started on port: ' + portD);