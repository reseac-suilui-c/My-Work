const expressapi = require('express');
const router = expressapi.Router();
const pool = require('../../dbConnect');
const mysqlConn = require('mysql');

router.get('/', (req, res) => {
     // res.status(200).json({
     //      message: 'Customer Available'
     // });
     // pool.connect();
     // connection.connect();

     pool.query('select * from customer', (error, results, fields) => {
          if (error) throw error;
          // res.status(200).json();
          res.status(200).json(results);
     });

     // pool.end();
});

// tgest customer
router.get('/:custID', (req, res) => {
     let cID = req.params.cID;

     // pool.connect();

     pool.query('select * from custome where id = ' + cID, (error, results, fields) => {
          if (error) throw error;
          // res.status(200).json();
          res.status(200).json(results);
     });

     // pool.end();
});

// insert into DB
router.post('/:custID', (req, res) => {
     // let cID = req.params.cID;
     let data = req.body;
     let sqlSentence = 'insert into customer (firstname, lastname, email) values (?, ?, ?)';

     sqlSentence = mysqlConn.format(sqlSentence, [data.firstname, data.lastname, data.email]);

     pool.query('select * from custome where id = ' + cID, (error, results, fields) => {
          if (error) throw error;
          // res.status(200).json();
          if (results.affectedRows == 1) {
               res.status(206).json({
                    message: 'Insert Success'
               });
          } else {
               res.status(400).json({
                    message: 'Insert failed!'
               });
          }
     });

});


module.exports = router;