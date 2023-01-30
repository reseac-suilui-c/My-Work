const expressapi = require('express');
const routerD = expressapi.Router();

//GFET
routerD.get('/', (req, res) => {
     let customerID = req.query.id;
     let customerN = req.query.name;
     res.send('In Area : Customer ...Get *** ' + customerID + ' - ' + customerN);
});

routerD.get('/:custID', (req, res) => {
     let id = req.params.custID;
     res.send('In Area : Customer ...Get ID *** ' + id);
});

// POST
routerD.post('/', (req, res) => {
     let usernameD = req.body;
     // res.send('In Area : Customer ...Post *** ' + JSON.stringify(usernameD));

     // Response Output: JSON
     // res.status(222);
     // res.json({
     //      fname: 'Mrs Symphere ' + usernameD.username
     // });

     res.status(202).json({
          fname: 'name: ' + usernameD.username
     });
});


module.exports = routerD;