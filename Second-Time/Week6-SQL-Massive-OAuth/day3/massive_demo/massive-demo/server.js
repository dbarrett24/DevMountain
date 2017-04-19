var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

//create a connection to postgres
var conn = massive.connectSync({
  // connectionString : "postgres://postgres:postgres@localhost:5432/massive_demo"
});



var app = express();
app.use(bodyParser.json());

//ties the Database into the application
// (in main server file)
app.set('db', conn);
//Bring in "DB" so we can use it in the app.
// (typically in main Controller file)
var db = app.get('db');


var port = 3000;


app.get("/injuries/all", function(req, res){
//by creating an SQL file, Massive automagically 
//creates a function hanging off the db object with the same name that executes the query you wrote.
  db.get_all_injuries(function(err, injuries) {
    if(!err){
      res.status(200).send(injuries) // injuries will contain an array of injuries
    }
  });

});


app.get('/incidents', function(req, res) {
  db.get_all_incidents(function(err, incidents){
      res.status(200).send(incidents);
  })
});

app.post('/incidents', function(req, res) {
  db.new_incident([req.body.us_state, req.body.injury_id, req.body.cause_id], function(err, sqlResponse){
    res.status(200).send(sqlResponse);
  })
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
