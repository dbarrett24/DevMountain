const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
//external files
const users = require('./users');
const userCtrl = require('./userCtrl');

const app = express();
app.use(express.static(__dirname, './public'));

//MIDDLEWARE
app.use(bodyParser.json());










// app.listen(3000, function(){
//     console.log("Listening on port", port);
// });

module.exports = app;