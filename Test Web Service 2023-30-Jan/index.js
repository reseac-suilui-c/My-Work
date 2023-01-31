// this file use for call file in API folder.

const expressAppJS = require('express');     // * call libraries : Express for Creates an Express application. The express() function is a top-level function exported by the express module.
const appJS = expressAppJS(); // * create variable for use Express application module

const imRouter = require('./API/Router/routerAPI');    // * import routerAPI file.
const imControl = require('./API/Controller/controlAPI');    // * import controlAPI file.

const bodyParser = require('body-parser');    // * import body-parser for JSON format


// appJS.use('/', (req, res) => {        // * use appJS to call functions on path '/xxx'
//      res.send('Index was run!');
// });

// app.use(bodyParser.urlencoded({ extended: true }));
appJS.use(bodyParser.json());
appJS.use('/', imRouter);
appJS.use('/', imControl);

appJS.use(function (req, res, next) {
     // must have setting like this to allow.
     res.setHeader('Access-Control-Allow-Origin', '*')
     // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
     // res.setHeader('Access-Control-Allow-Headers', '*', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization, X-Access-Token')
     // res.setHeader('Access-Control-Allow-Credentials', true)
     next();
});


// Servicec no Found
appJS.use((req, res) => {
     res.status(400);
     res.send('Service not Found...');
});

module.exports = appJS;  // * export all function in appJS file to another file