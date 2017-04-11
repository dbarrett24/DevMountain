const express = require('express');
const bodyParser = require('body-parser');

//initialize express
const app = express();
const port = 3000;
//modules a.k.a middleware
app.use(express.static('assets')); //bodyParser will parse things from the Assets folder.
app.use(bodyParser.json());

var messages = [];


app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', (req, res, next)=>{
  console.log(req.body);
  messages.push({ message: req.body.message, time: new Date, userImage: 'http://devutpol.com/tf/return-preview/img/testimonial/3.jpg', userName: req.body.userName});
  res.status(200).json({ messages: messages }); //you MUST include this line to get a response from the server.
});



//es6 concatenation and fat arrow functions!
app.listen(port, ()=>{
  console.log(`Now listening on port ${port}!`);
});