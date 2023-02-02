const expressRoute = require('express');
const routeAPI = expressRoute.Router();
const bodyPar = require('body-parser');

// routeAPI.get('/', (req, res) => {
//         res.send(req.query);
// });

routeAPI.use(bodyPar.json());

// routeAPI.get('/', (req, res) => {
// let x = req.query.A;
// let y = req.query.B;
// var resultsM = x + y;
// res.status(200).json({
//         results: resultsM
// });
// });

router.get('/', (req, res) => {
        res.send("Test Get!");
});

router.post('/', (req, res) => {
        res.send("Test POST!");
});


module.exports = routeAPI;