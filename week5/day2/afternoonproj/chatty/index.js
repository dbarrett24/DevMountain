var express = require('express');
var bodyParser = require('body-parser');

//initialize express
var app = express();

//middleware
app.use(express.static('assets'));
app.use(bodyParser.json());

var messages = [];

//endpoints
app.get('/messages', function(req, res, next){
    res.status(200).json({ messages: messages });
});
app.post('/messages', function(req, res, next){
    messages.push( { message: req.body.message, time: new Date() } );
    res.status(200).json({ messages: messages });
});


app.listen(3000);


