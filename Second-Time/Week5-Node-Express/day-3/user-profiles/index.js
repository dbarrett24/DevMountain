const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const config = require('./config');
const userCtrl = require('./controllers/userCtrl');
const profileCtrl = require('./controllers/profileCtrl');

const app = express();
const port = 3500;

//configure CORS to only allow request access from port 3500; Else ANYone can use our server.
//MIDDLEWARE
const corsOptions = {
    origin: 'http://localhost:' + port
}
app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use(session({ 
    secret: config.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
 }));

app.use(express.static(__dirname + '/public'));

//ENDPOINTS

    //get
app.get('/api/profiles', profileCtrl.getFriends);
    //post
app.post('/api/login', userCtrl.login);


//Es6 arrow function
app.listen(port, ()=>console.log("Listening on port", port));