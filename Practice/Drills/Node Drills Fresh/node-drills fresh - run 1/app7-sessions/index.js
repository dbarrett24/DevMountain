var express = require('express');
var bodyParser = require('body-parser');
var sesssion = require('express-session');
var cors = require('cors');

var port = 3000;
var app = express();

//MIDDLEWARE
app.use(bodyParser.json());




app.listen(port, function() {
  console.log('listening to port ', port);
});