var express = module.exports = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

const connectionString = "postgres://postgres@localhost/sandbox"
const massiveInstance = massive.connectSync({connectionString : connectionString});

app.set('db', massiveInstance);
const db = app.get('db');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());


//adds a new plane to the DB using SQL insert statements
// app.new_plane(function(err, planes){
//   console.log(err, "plane added")
// });




app.listen('3000', function(){
  console.log("Successfully listening on : 3000")	
});

