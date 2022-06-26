const express = require('express');
const { default: mongoose } = require('mongoose');
let index = require('./routes/index');
let todoRoute = require('./routes/todoRoutes');

let app = express()
const port = 8081;

app.use('/',todoRoute)

module.exports = app