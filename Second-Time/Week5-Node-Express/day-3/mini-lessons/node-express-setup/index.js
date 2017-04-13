const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// console.log(app);

app.use(bodyParser.json());

let firstName = 'Joe'
let lastName = ['blank']

//==== GET ENDPOINT
app.get('/name', (req, res) => {
  res.status(200).send(lastName);
})

app.get('/dave', function(req,res) {
  res.send('sup dave')
})

//=== PUT ENDPOINT
app.put('/name/change', (req,res) => {
  firstName = 'Frank';
  res.status(200).send(firstName)
})

// === POST ENDPOINT
app.post('/name', (req,res) => {
  console.log(req)

  lastName.push(req.body.name);

  res.status(200).json(lastName)
})


const port = 3535;
app.listen(port, () => {
  console.log('Listening on port: ', port)
})
