var express = require('express');
var bodyParser = require('body-parser');

//Controllers
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

//Create the server
var app = express();

//middleware
// app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(middleware.addHeaders); //app.use applies a function to EVERY request made before passing it on to the next function.

//read-only endpoints
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latet', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);

app.listen(3030, function(){
    console.log('Server is now live on port 3030!');
});