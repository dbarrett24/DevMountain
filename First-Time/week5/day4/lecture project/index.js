
//REQUIRE MODULES
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
//adding the .js extension is optional
var FoodController - require('./controllers/food_controller.js');
//Initialize express
var app = express();
//declare port
var port = 9091;

//endpoints

app.get("/", function(req, res){
    //request from client
    //response to client from server
    res.status(200).send("HAAAAAIIIOO")
});


app.post('/', function(req, res){
    console.log('body', req.body);
});
//middleware
    app.use(express.static(__dirname + '/public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(session({
        //type whatever you want here
        secret: config.SESSION_SECRET,
        //if something exists already get rid of it.
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false //the default value is false, so you could delete this line.
        }
    }));

//listen
app.listen(port, function(){
    console.log('listening on port', port)
});
