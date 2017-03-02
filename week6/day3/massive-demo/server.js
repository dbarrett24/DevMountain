var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = express();
app.use(bodyParser.json());

var port = 3000;

//CONNECT TO POSTGRES via MASSIVE.JS
var conn = massive.connectSync({
  connectionString : "postgres://postgres:sflung2012588@localhost/massive_demo"
});

app.set('db', conn); //Adding postgres connection to EXPRESS

var db = app.get('db') //pretend this is happening in your controller file.

//ENDPOINTS
app.get('/injuries', function(req, res) {
  db.getAllInjuries(function(err, injuries){
    if (!err) {
      res.send(injuries)
    }
  })
  console.log('POST sighting');
});

app.get('/incidents', function(req, res) {
  db.getAllIncidents(function(err, incidents){
    if (!err) {
      res.send(incidents)
    }
  })
  console.log('POST sighting');
});

app.post('/incidents', function(req, res) {
  var params = [
    req.body.us_state,
    req.body.injury_id,
    req.body.cause_id
  ]
  db.newIncident(params, function(err, response){
    if (!err) {
      db.getAllIncidents(function(err, incidents){
          res.send(incidents.length.toString())
        
      })
      res.send("IT WORKS!")
    }
  })
  console.log('POST sighting');
});


//LISTEN
app.listen(port, function() {
  console.log("Started server on port", port);
});
