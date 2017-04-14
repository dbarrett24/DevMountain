const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/item', function(req, res, next){
    res.status(200).send(data);
});
app.post('/item', function(req, res, next){
    data.push(req.body);
    res.status(200).send(data);
});










app.listen(port, ()=> console.log('listening on port', port));