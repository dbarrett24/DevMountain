var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var data = require('./data.js')

var app = express();

app.use(bodyParser.json());


//GET
// app.get('/getALL', function(req, res, next){
// 	res.status(200).send(data);
// })
app.get('/getALL/:id', function(req, res, next){
	res.status(200).send(data[req.params.id]);
})
app.get('/getALL', function(req, res, next){
	var results = [];
	console.log(req.query);
	if(req.query.job){
		for(var i = 0; i < data.length; i++){
			if(data[i].job === req.query.job){
				results.push(data[i]);
			}
		}

		return res.status(200).send(results);
	}
	return res.status(200).send(data);
})



//POST
app.post('/getALL', function(req, res, next){
	data.push(req.body);
	res.status(200).send(data);
})

//update - put
app.put('/edit', function(req, res, next){
	for(var i = 0; i < data.length; i++){
		if(data[i].sex === 'women'){
			data[i].job = req.query.job;
		}
	}
	res.status(200).send(data);
})

//delete
app.delete('/remove/:sex', function(req, res, next){
	for(var i = 0; i < data.length;  i++){
		if(req.params.sex === data[i].sex){
			data.splice(i, 1);
			i--;
		}
	}
	res.status(200).send(data);
})




app.listen(port, function() {
	console.log('Listening on port',port);
})