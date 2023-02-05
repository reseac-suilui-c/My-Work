const expressRoute = require('express');
const routeAPI = expressRoute.Router();

const imCalControl = require('../CalControls/calControl');
const imErrMess = require('../errorMessageManage/err_messages');

// routeAPI.get('/', (req, res) => {
//         res.send(req.query);
// });

// routeAPI.get('/', (req, res) => {
// let x = req.query.A;
// let y = req.query.B;
// var resultsM = x + y;
// res.status(200).json({
//         results: resultsM
// });
// });

routeAPI.get('/', (req, res) => {
        // res.send("Test Get!");
        res.send({ 'value': "Test Get!" });
        // res.send([{ 'value': "Test Get!" }]);
});

routeAPI.post('/', (req, res) => {
        // res.send("Test POST!");
        res.send([{ 'value': "Test POST!" }]);
});

// *********************************************************************************************
//GET
routeAPI.get('/calGetAddN', (req, res) => {
        // let x = req.query.x;
        // let y = req.query.y;
        let x = (req.query.A);
        let y = (req.query.B);
        var resultsAdd = x + y;
        // res.send('In Area : calAdd : ' + resultsAdd);
        res.send({
                Add: resultsAdd
        });
});

routeAPI.get('/calMultiplyGet', (req, res) => {
        // let x = req.query.x;
        // let y = req.query.y;
        let x = req.query.A;
        let y = req.query.B;
        var resultsM = x / y;
        res.status(200).json({
                results: resultsM
        });
});

routeAPI.get('/calGetAdd', imCalControl.getAdd(), (req, res) => {
        res.send({
                Add: req.addCal
        });
});

routeAPI.get('/calGetTotal', imCalControl.getAdd(),
        imCalControl.getSubtraction(),
        imCalControl.getMultiply(), (req, res) => {
                res.send({
                        Add: req.addCal,
                        Sub: req.subCal,
                        Multiply: req.multiplyCal
                });
        });

// *********************************************************************************************
// POST
routeAPI.post('/calMultiplyPost', (req, res) => {
        var svar = req.body.svar;
        var zvar = req.body.zvar;
        var resultsMultiply = svar / zvar;
        // console.log(req.body);
        // res.send(req.body.svar);
        res.status(200).json({
                results: resultsMultiply
        });
});

routeAPI.post('/calSubPost',
        imCalControl.postAdd(),
        imCalControl.postSubtraction(), (req, res) => {
                res.send({
                        Sub: req.subCal
                });
                // res.send(req.body);
        });

routeAPI.post('/calTotalPost',
        imCalControl.postAdd(),
        imCalControl.postSubtraction(), (req, res) => {
                res.send({
                        Add: req.addCal,
                        Sub: req.subCal
                });
                // res.send(req.body);
        });


module.exports = routeAPI;