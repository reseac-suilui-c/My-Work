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

router.get('/', (req, res) => {
        // res.send("Test Get!");
        res.send([{ 'value': "Test Get!" }])
});

router.post('/', (req, res) => {
        // res.send("Test POST!");
        res.send([{ 'value': "Test POST!" }])
});

// *********************************************************************************************
//GET
router.get('/calAddGet', (req, res) => {
        // let x = req.query.x;
        // let y = req.query.y;
        let x = req.query.A;
        let y = req.query.B;
        var resultsAdd = x + y;
        // res.send('In Area : calAdd : ' + resultsAdd);
        res.send({
                Add: req.addCal
        });
});

router.get('/calMultiplyGet', (req, res) => {
        // let x = req.query.x;
        // let y = req.query.y;
        let x = req.query.A;
        let y = req.query.B;
        var resultsM = x / y;
        res.status(200).json({
                results: resultsM
        });
});

router.get('/calGetAdd', calCont.getAdd(), (req, res) => {
        res.send({
                Add: req.addCal
        });
});

router.get('/calGetTotal', calCont.getAdd(), calCont.getSubtraction(), calCont.getMultiply(), (req, res) => {
        res.send({
                Add: req.addCal,
                Sub: req.subCal,
                Multiply: req.multiplyCal
        });
});

// *********************************************************************************************
// POST
router.post('/calMultiplyPost', (req, res) => {
        var svar = req.body.svar;
        var zvar = req.body.zvar;
        var resultsMultiply = svar / zvar;
        // console.log(req.body);
        // res.send(req.body.svar);
        res.status(200).json({
                results: resultsMultiply
        });
});

router.post('/calSubPost', calCont.postAdd(), calCont.postSubtraction(), (req, res) => {
        res.send({
                Sub: req.subCal
        });
        // res.send(req.body);
});

router.post('/calTotalPost', calCont.postAdd(), calCont.postSubtraction(), (req, res) => {
        res.send({
                Add: req.addCal,
                Sub: req.subCal
        });
        // res.send(req.body);
});


module.exports = routeAPI;