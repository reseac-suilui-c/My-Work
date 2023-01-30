const expressT = require('express');
const appT = expressT();

// Restful api => http://localhost:3000/
appT.use('/', (req, res) => {
     res.send('Test Success');
});

// apply on serverTest
module.exports = appT;