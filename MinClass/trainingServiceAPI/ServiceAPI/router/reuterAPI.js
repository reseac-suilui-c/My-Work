var express = require('express');
var router = express.Router()
var reuterAPIController = require('../controller/routerAPIController')
var dbConcect = require('../config/dbConfig')
const sql = require('mssql')
var errorMsg = require('../errorMessage')

var request = new sql.Request();
router.get('/',
    (req, res) => {
        res.send([{ 'value': "Call API naja." }])
        // res.send("Call API naja.")
    })

router.get('/add2func',
    reuterAPIController.calAdd(),
    reuterAPIController.calNegative(),
    (req, res) => {
        res.send({
            add: req.add,
            negative: req.negative,
            totla: req.total,
            input: req.query
        })
    })

router.get('/add',
    reuterAPIController.calAdd(),
    (req, res) => {
        res.send({
            add: req.add
        })
    })

router.get('/cal/add/:A/:B', (req, res) => {
    // req.query
    console.log(req.params);
    // var result = parseInt(req.query.A) + parseInt(req.query.B)
    res.send(req.params);
    // res.send("Test Get Service File -> Add Result = " + req.params);
})

router.post('/add2func',
    reuterAPIController.calAddPost(),
    reuterAPIController.calNegativePost(),
    (req, res) => {
        res.send(req.body)
        // req.body
        // var result = parseInt(req.body.A) + parseInt(req.body.B)
        // res.send("Test POST Service File -> " + result);
        // res.send({
        //     add: req.add,
        //     negative: req.negative,
        // })
    })

router.post('/',
    (req, res) => {
        // res.send(req.body)
        // req.body
        // var result = parseInt(req.body.A) + parseInt(req.body.B)
        res.send( res.send([{ 'value': "Test POST Service File -> " }]));
        // res.send({
        //     add: req.add,
        //     negative: req.negative,
        // })
    })


router.get('/service/connect/sql', (req, res) => {
    const sqlConfig = {
        user: 'sa',
        password: '4we_TAch',
        server: '192.168.1.231',
        database: 'ln_prod',
        options: {
            encrypt: false
        }
    }
    sql.connect(sqlConfig, function (err) {
        if (err) res.send(err);
        // res.send("Test serviceA Service File (db connect.)");
        // console.log("db connect.");
        var request = new sql.Request();
        request.query('select top 1 t_item from ttcibd001999', function (err, result) {
            if (err) res.send(err);
            else {

                if (result.rowsAffected !== 0) { // if (result.recordset.length !== 0) {
                    res.send(result)
                }

            }
        })
    })

})


router.get('/service/connect/sql/pool', async (req, res) => {
    const sqlConfig = {
        connectLimit: 10,
        user: 'sa',
        password: '4we_TAch',
        server: '192.168.1.231',
        database: 'ln_prod',
        options: {
            encrypt: false
        }
    }
    const pool = new sql.ConnectionPool(sqlConfig);
    try {
        await pool.connect();
        const request = pool.request();
        var result = await request.query('select top 1 t_item from ttcibd001999')
        res.send(result)
    } catch (error) {
        res.send(error)
    } finally {
        pool.close();
    }
})

router.get('/service/connect/sql/autoConnect', async (req, res) => {
    dbConcect.query('select top 1 t_item from ttcibd001999', function (err, result) {
        if (err) res.status(404).send(err);
        else {
            // console.log(result);
            if (result.rowsAffected !== 0) { // if (result.recordset.length !== 0) {
                res.send(result)
            } else {
                res.send(errorMsg.err_select_not_founf)
            }

        }
    })
})

module.exports = router

