const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + 'public'));

app.get('/', function(req, res, next){
    res.status(200).send('HAY BOI!');
});








app.listen(port, function(){
    console.log('listening for changes on port', port);
});


