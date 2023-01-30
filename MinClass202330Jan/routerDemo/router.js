const expressapi = require('express');
const router = expressapi.Router();
const calCont = require('../CalControls/calculateCont');
const sql = require('mssql');

const sqlConnect = require('../connectDB/connectDBconfig');

const errMessageConfig = require('../errorMessageManage/err_mess_detail');


//GET
router.get('/', calCont.getAdd(), calCont.getSubtraction(), calCont.getMultiply(), (req, res) => {
     res.send({
          Add: req.addCal,
          Sub: req.subCal,
          Multiply: req.multiplyCal
     });
});
// POST
router.get('/', calCont.postAdd(), calCont.postSubtraction(), (req, res) => {
     res.send({
          Add: req.addCal,
          Sub: req.subCal
     });
});
// ************************************************************//
// router.get('/', (req, res) => {
//      res.send('In Area : Get Method');
// });

// router.get('/:custID', (req, res) => {
//      let uid = req.params.custID;
//      res.send('In Area : CustomerID ...Get ID' + uid);
// });

// router.get('/testQueryID', (req, res) => {
//      let id = req.query.id;
//      let cname = req.query.name;
//      res.send('In Area : CustomerID ...Get ID : ' + id + ' - ' + cname);
// });

router.get('/testcalAdd', (req, res) => {
     let x = req.query.x;
     let y = req.query.y;
     var resultsAdd = x + y;
     res.send('In Area : calAdd : ' + resultsAdd);
});

router.get('/multiply', (req, res) => {
     let x = req.query.x;
     let y = req.query.y;
     var resultsM = x / y;
     res.status(200).json({
          results: resultsM
     });
});

router.post('/multiply', (req, res) => {
     var svar = req.body.svar;
     var zvar = req.body.zvar;
     var resultsMultiply = svar / zvar;
     // console.log(req.body);
     // res.send(req.body.svar);
     res.status(200).json({
          results: resultsMultiply
     });
});

// ********************************* SQL*************************
router.get('/connectDB', (req, res) => {
     const sqlConnected = {
          user: 'sa',
          password: '4we_TAch',
          server: '192.168.1.231',
          database: 'ln_prod',
          options: {
               encrypt: false
          }
     }
     sql.connect(sqlConnected, (error) => {
          if (error) throw res.send(error);
          console.log('DB Connected');

          var requestDemo = new sql.Request();
          requestDemo.query('select top 10 * from ttcibd001999', (error, results) => {
               if (error) throw res.send(error);
               else {
                    if (results.rowsAffected > 0) {
                         res.send(results);
                    }
               }
          });
     });
});

router.get('/connectDB/TestGet', (req, res) => {

     var requestDemo = new sql.Request(sqlConnect);
     requestDemo.query('select top 3 * from ttcibd001999', (error, results) => {
          if (error) throw res.send(error);
          // if (error) throw res.send(error);
          else {
               if (results.rowsAffected > 0) {
                    res.send(results);
               }
               else {
                    // res.send(errMessageConfig.err.err_mess_manage_files);
                    console.log(errMessageConfig.err_mess_manage_files);
               }
          }
     });
});


// ********************************* Pool Connection *********************************
router.get('/connectDB/Pool', async (req, res) => {
     // const sqlConnected = {
     //      connectionLimit: 10,
     //      user: 'sa',
     //      password: '4we_TAch',
     //      server: '192.168.1.231',
     //      database: 'ln_prod',
     //      options: {
     //           encrypt: false
     //      }
     // }
     // const poolConnected = new sql.ConnectionPool(sqlConnected);
     const poolConnected = new sql.ConnectionPool(sqlConnect);
     // sql.connect(sqlConnected, (error) => {
     try {
          await poolConnected.connect();
          const requestDemo = poolConnected.request();
          var resultsDemo = await requestDemo.query('select top 10 * from ttcibd001999')

          res.send(resultsDemo);
          // poolConnected.close();

     } catch (error) {
          res.send(error);
     } finally {
          poolConnected.close();
     }
});
// });

// *********************** Test **********************
router.post('/connectDB/TestPost', async (req, res) => {
     const poolConnected = new sql.ConnectionPool(sqlConnect);
     // sql.connect(sqlConnected, (error) => {
     try {
          await poolConnected.connect();
          const requestDemo = poolConnected.request();
          var resultsDemo = await requestDemo.query('select top 10 * from ttcibd001999')

          res.send(resultsDemo);
          // poolConnected.close();

     } catch (error) {
          res.send(error);
     } finally {
          poolConnected.close();
     }
});

module.exports = router;