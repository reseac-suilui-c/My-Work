const expressR = require('express');    // * create  Express application.
const routerAPI = expressR.Router();

// **************************************************************
// get
routerAPI.get('/', (req, res) => {
     res.send('default: GET');
});

routerAPI.get('/getTest', (req, res) => {
     let resGet = req.query.A + req.query.B
     res.send('GET results: ' + resGet);
});


// **************************************************************
// post
routerAPI.post('/', (req, res) => {
     res.send('default: POST');
});

routerAPI.post('/postTest', (req, res) => {
     let resPost = req.body.A + req.body.B
     res.send('POST results: ' + JSON.stringify(resPost));
});

module.exports = routerAPI;