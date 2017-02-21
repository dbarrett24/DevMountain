console.log('hello');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//All express methods are available to us in the 'app'.

//MIDDLEWARE
app.use(bodyParser.json());

//requests/response
//ENDPOINTS
//https://localhost:PORT ---OR...
//https://127.0.0.1:9000
//creating the address to hit
app.get('/', function(req, res, next){ //request, response, next
    response.status(200).send("HAI");
});

app.post('/saveName', function(request, response, next){
    console.log('request.body', request.body)
})

// LISTEN
// Stay on ports 3000-12000, there are many ports that are already reserved for different things.
app.listen(9000,function(){
    console.log('Listening on port 9000');
})