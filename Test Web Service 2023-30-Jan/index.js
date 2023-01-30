// this file use for call file in API folder.

const expressAppJS = require('express');     // * call libraries : Express for Creates an Express application. The express() function is a top-level function exported by the express module.
const appJS = expressAppJS(); // * create variable for use Express application module

const imRouter = require('./API/Router/routerAPI');    // * import routerAPI file.

const bodyParser = require('body-parser');    // * import body-parser for JSON format


// appJS.use('/', (req, res) => {        // * use appJS to call functions on path '/xxx'
//      res.send('Index was run!');
// });

appJS.use(bodyParser.json());
appJS.use('/', imRouter);

// Servicec no Found
appJS.use((req, res) => {
     res.status(400);
     res.send('Service not Found...');
});

module.exports = appJS;  // * export all function in appJS file to another file