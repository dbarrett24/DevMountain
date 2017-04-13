const express = require('express');
const bodyParser = require('body-parser');
const mainCtrl = require('./mainCtrl');


const app = express();
const port = 4000;

app.get('/api/user', mainCtrl.name);




app.listen(port, ()=>{
    console.log('Listening on port ', port);
});