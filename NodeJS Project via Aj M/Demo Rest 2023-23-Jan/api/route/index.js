const expressapi = require('express');
const routerD = expressapi.Router();

routerD.get('/', (req, res) => {
     res.send('In Area: Index JS ...');
});

module.exports = routerD;