var express = require('express');
var router = express.Router()

router.get('/', (req, res) => {
    res.send("Test Get ServiceA File !");
})

router.post('/', (req, res) => {
    res.send("Test POST ServiceA File !");
})

router.post('/serviceA', (req, res) => {
    res.send("Test serviceA ServiceA File !");
})

module.exports = router

