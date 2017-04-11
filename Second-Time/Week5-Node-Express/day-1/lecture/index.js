const express = require('express'); //now we can write express code and the application will understand it! It loads this before running any code.
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//NOW app exposes HTTP methods and allow us to use them.

//middleware
app.use(bodyParser.json()); //for every request, USE bodyParser to parse it.
app.use(bodyParser.urlencoded({ extended: true })); //bodyParser parses any message you send and put it on req.body



//------------ENDPOINTS
//1st param --> PATH (the address)
//2nd param --> callback. What are you going to do at this address?!
app.get('/', function(request, response, next){
    //go to database and get information
    console.log('oh haaaai');
    response.status(201).send('hai');
});
app.post('/songs', function(request, response, next){
    //create new database entry
    //create users
    //create user details like messages, comments, etc.
});
//status is the status code: 200, 400, 404, 500, etc
//200 --ok
//400 --client errors
//500 --server errors

//opens an loop that continues listening for changes, requests, etc.
app.listen(port, function(){
    console.log( "listening on " + port);
})

// use ports between 3000 -12000 DONT USE ANY OTHERS, it's risky.




