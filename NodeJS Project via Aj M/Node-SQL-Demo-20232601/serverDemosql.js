const http = require('http');
const port = process.env.port || 3000;
const app = require('./appDemosql');
const server = http.createServer(app);
server.listen(port);