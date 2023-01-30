// *************** Server side ***********************
const http = require('http');       //  *     http: To use the HTTP server and client
var port = process.env.port || 3030    // * port

const imIndex = require('./index');          // * import index.js detail for use 
const serverJS = http.createServer(imIndex);   //  *     server: create new Server and run on 'imIndex/call index.js
serverJS.listen(port);   // * run server on 'port'

// Log
console.log('Server: run on port: %s', port);