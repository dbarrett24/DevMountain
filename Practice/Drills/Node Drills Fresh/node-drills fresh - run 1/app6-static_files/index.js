const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//serve Static Files
app.use(express.static(__dirname, './public'));

//MIDDLEWARE
app.use(bodyParser.json());







app.listen(3000, function(){
    console.log('Listening on port ', 3000);
});
