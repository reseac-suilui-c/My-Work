var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var routerAPI = require('./router/reuterAPI')
var routerAPIA = require('./router/reuterAPIA')



// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', '*', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization, X-Access-Token')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})
app.use('/', routerAPI)
app.use('/serviceA', routerAPIA)


var server = app.listen(1000, function () {
  var port = server.address().port
  console.log("Service Start : %s", port);
})