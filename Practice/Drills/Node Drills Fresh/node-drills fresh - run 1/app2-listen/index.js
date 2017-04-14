const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
const port = 3000;












app.listen(port, function(){
    console.log('Listening on port ', port);
})