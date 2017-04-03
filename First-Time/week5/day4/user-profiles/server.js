const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      cors = require('cors'),

      //secret
      config = require('./config'),

      //controllers
      profileCtrl = require('./controllers/profileCtrl'),
      userCtrl = require('./controllers/userCtrl');

const app = express();
var port = 3000;



var corsOptions = {
    origin: 'http://localhost:3000' //whitelist ONLY this origin
};

app.use(express.static(__dirname + '/public'));

//middleware
app.use(bodyParser.json());
app.use(cors(corsOptions)); //whitelist ONLY our localhost above (corsOptions) for sending/receiving data from the server
app.use(session({ secret: config.sessionSecret })); //secret


//endpoints
app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getUserFriends);



//listen
app.listen(port, function(){
    console.log('listening on port ' + port);
});



