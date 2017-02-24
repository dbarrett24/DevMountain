var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//middleware
// app.use(express.static('assets'));
app.use(bodyParser.json());

//endpoints
