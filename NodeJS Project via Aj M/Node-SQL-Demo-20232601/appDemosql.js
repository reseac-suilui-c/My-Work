const express = require('express');
const app = express();
const indexRouter = require('./API/route/index');
const custRouter = require('./API/route/customers');
const bodyParser = require('body-parser');
const connectDB = require('./dbConnect')

app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/customers', custRouter);


module.exports = app;