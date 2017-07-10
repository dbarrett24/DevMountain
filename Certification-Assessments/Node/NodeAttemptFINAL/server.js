const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const usersCtrl = require('./usersCtrl');

//Middleware
app.use(bodyParser.json());


//Endpoints
app.get('/api/users', usersCtrl.getAllUsers);
app.get('/api/users/:id', usersCtrl.getUserById);
app.get('/api/admins/', usersCtrl.getAdmins);
app.get('/api/nonadmins/', usersCtrl.getNonAdmins);
app.get('/api/user_type/:userType', usersCtrl.getUsersByType);
app.put('/api/users/:userId', usersCtrl.updateUserById);
app.post('/api/users/', usersCtrl.addUser);
app.delete('/api/users/:userId', usersCtrl.deleteUser);


app.listen(port, function(){
    console.log('listening on port ', port)
});