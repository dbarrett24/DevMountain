module.exports = {
    name: function(req, res, next){
        console.log(req.query);

        if (req.query.name === "joe"){
            return res.status(200).send('hi joe');
        }  else {
            return res.status(401).send('imposter');
        }
        res.status(200).send('HAI');
    }
}

//try typing localhost:4000/api/user?name=joey
// and
//try typing localhost:4000/api/user?name=joe
// in 