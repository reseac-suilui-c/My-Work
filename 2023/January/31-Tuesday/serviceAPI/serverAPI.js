
const httpS = require('http');
const portS = process.env.portS || 1000;

const startedSV = httpS.createServer();

startedSV.listen(portS);

console.log(startedSV);
console.log('port: ' + portS);