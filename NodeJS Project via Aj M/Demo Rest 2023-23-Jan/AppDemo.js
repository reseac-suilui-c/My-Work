const expressD = require('express');
const indesRoute = require('./api/route/index');
const custRoute = require('./api/route/customers');
const bodyParser = require('body-parser');
const appDemo = expressD();

appDemo.use(bodyParser.json());

appDemo.use('/', indesRoute);
appDemo.use('/customers', custRoute);

// Servicec no Found
appDemo.use((req, res) => {
     res.status(400);
     res.send('Service not Found..');
});

module.exports = appDemo;
