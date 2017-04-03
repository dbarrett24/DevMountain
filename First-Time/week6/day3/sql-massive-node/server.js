var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');

var dbKey = require('./config');
var controller = require('./productsCtrl');

var app = express();
app.use(bodyParser.json());

var port = 3000;


/********************************************** */
//DB CONNECTIONS
var conn = massive.connectSync({connectionString: 'postgres://postgres:' + dbKey + '@localhost/massive_practice'}); //connect the database -- CONNECT APP TO POSTGRES via MASSIVE.JS

     //OPTION 2
// var conn = massive.conenctSync({db: 'massive_practice'}); 
/********************************************** */

app.set('db', conn);//add postgres connection to express
var db = app.get('db');//move to controller.

//ENDPOINTS
app.get('/api/products', controller.GetAll);
app.get('/api/product/:productId', controller.GetOne);
app.put('/api/product/:productId?desc=', controller.Update);
app.post('/api/product', controller.Create);
app.delete('/api/product/:productId', controller.Delete);




