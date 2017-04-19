//REQUIRES
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

//APP AND MIDDLEWARE
const app = module.exports = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());

//DATABASE CONNECTION
const conn = massive.connectSync({
    connectionString: "postgres://postgres:postgres@localhost/afternoon_proj"
});
app.set('db', conn);
const db = app.get('db');
//Controllers must be below the DB set
const productsCtrl = require('./productsCtrl');



//ENDPOINTS
app.get('/api/product', productsCtrl.GetOne);
app.get('/api/products', productsCtrl.GetAll);
app.post('/api/create', productsCtrl.Create);
app.put('/api/update', productsCtrl.Update);
app.delete('/api/delete', productsCtrl.Delete);



app.listen(port, function(){
    console.log("Listening on port", port);
})