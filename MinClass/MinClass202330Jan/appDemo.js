const expressD = require('express');
const indexRoute = require('./routerDemo/router');
const bodyParser = require('body-parser');
const appDemo = expressD();


appDemo.use(bodyParser.json());

appDemo.use('/', indexRoute);

// Servicec no Found
appDemo.use((req, res) => {
     res.status(400);
     res.send('Service not Found..');
});

module.exports = appDemo;