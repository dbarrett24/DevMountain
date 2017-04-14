const express = require('express');

const app = express();
const port = 3000;

app.use(express.static( 'public'));
app.use(express.static( 'src/views'));

app.get('/', function(req, res, next){
    res.send('Hello World');
});


app.get('/books', function(req, res, next){
    res.send('Hello Books');
});













app.listen(3000, function(err){
    console.log('Listening on port', port)
});