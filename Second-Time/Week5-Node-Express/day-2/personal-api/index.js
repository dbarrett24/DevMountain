const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./controllers/middleware.js');
const mainCtrl = require('./controllers/mainCtrl.js');
const app = express();

//MIDDLEWARE === runs on every request
app.use(bodyParser.json());
app.use(middleware.addHeaders);

//Read-only Endpoints (GET Endpoints);
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbyType);
app.get('/family/', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants/', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantName);

//Writable Endpoints (PUT Endpoints);
app.put('/name', mainCtrl.putName);
app.put('/location', mainCtrl.putLocation);
app.post('/hobbies', mainCtrl.postHobby);
app.post('/occupations', mainCtrl.postOccupation);
app.post('/family', mainCtrl.postFamily);
app.post('/restaurants', mainCtrl.postFamily);