
const httpS = require('http');
const portS = process.env.portS || 19006;

const appIndex = require('./indexAPI');

// const startedSV = httpS.createServer();
const startedSV = httpS.createServer(appIndex);

startedSV.listen(portS);

console.log(startedSV);
console.log('port: ' + portS);