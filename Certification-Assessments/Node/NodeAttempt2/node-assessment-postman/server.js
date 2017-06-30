const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const usersCtrl = require('./usersCtrl');

//Middleware
app.use(bodyParser.json());


//Endpoints
app.get('/api/users', usersCtrl.getAllUsers);
// app.get('/api/users?age=40', usersCtrl.getUsersByAgeLimit);



app.listen(port, function(){
    console.log('listening on port ', port)
});