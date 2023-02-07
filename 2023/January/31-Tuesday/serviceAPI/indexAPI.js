const expressIndex = require('express');
const indexAPI = expressIndex();
const bosyPS = require('body-parser');

const importRoute = require('./Router/routeAPI');


indexAPI.use(bosyPS.json());
// ***********************************************************
indexAPI.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', '*', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization, X-Access-Token')
        res.setHeader('Access-Control-Allow-Credentials', true)
        next()
});
// ***********************************************************
indexAPI.use('/', importRoute);


module.exports = indexAPI;