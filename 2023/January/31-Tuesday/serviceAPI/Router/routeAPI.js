const expressRoute = require('express');
const routeAPI = expressRoute.Router();

routeAPI.get('/', (req, res) => {
        res.send(req.query);
});

module.exports = routeAPI;