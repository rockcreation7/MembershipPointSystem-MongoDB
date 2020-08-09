"use strict";
var dotenv = require('dotenv');
dotenv.config();
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');
var formRoute = require('../routes/formRoute');
var adminRoute = require('../routes/adminRoute');
var setting = require('../src/config.js');
console.log(setting);
var db = mongoose.connection;
var url = setting.MONGODB_URL;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
db.once('open', function (_) {
    console.log('Database connected', url);
});
db.on('error', function (err) {
    console.error('connection error', err);
});
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.use('/api/form', formRoute);
app.use('/api/admin', adminRoute);
//3f
app.listen(4000);
