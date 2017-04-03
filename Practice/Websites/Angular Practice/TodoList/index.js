const express = require('express');
const bodyParser = require('body-parser');
const expSession = require('express-session');
const cors = require('cors');
const massive = require('massive');

//middleware

//using module.exports here? Why?
const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./public'));
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));

const config = require('./config.js');
const port = config.port;

const db = massive.connectSync({connectionString : config.elephantSQL});



app.listen(config.port, function(){
    console.log('connected on ' + port);
});