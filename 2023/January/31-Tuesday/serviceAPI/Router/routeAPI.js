const expressRoute = require('express');
const routeAPI = expressRoute.Router();

// routeAPI.get('/', (req, res) => {
//         res.send(req.query);
// });

routeAPI.get('/', (req, res) => {
        let x = req.query.A;
        let y = req.query.B;
        var resultsM = x + y;
        res.status(200).json({
                results: resultsM
        });
});


module.exports = routeAPI;