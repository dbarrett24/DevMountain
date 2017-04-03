const app = require('./server');
const db = app.get('db');


module.exports = {
    Create: function(req, res, next){
        db.create_product([req.body.Name, req.body.Desc, req.body.Price, req.body.Image], function(err, create){
            if(err){
                res.status(500).send(err);
            }
            else{
                res.send(create);
            }
        });
    },
    GetOne: function(req, res, next){
        db.create_product([req.params.productId], function(err, create){
            if(err){
                res.status(500).send(err);
            }
            else{
                res.send(create);
            }
        });
    },
    GetAll: function(req, res, next){
        db.create_product([req.body.Name, req.body.Desc, req.body.Price, req.body.Image], function(err, one){
            if(err){
                res.status(500).send(err);
            }
            else{
                res.send(one);
            }
        });
    },
    Update: function(req, res, next){
        db.create_product([req.params.productId, req.query.desc],function(err, update){
            if(err){
                res.status(500).send(err);
            }
            else{
                res.send(update);
            }
        });
    },
    Delete: function(req, res, next){
        db.create_product([req.params.productId], function(err, deletes){
            if(err){
                res.status(500).send(err);
            }
            else{
                res.send(deletes);
            }
        });
    },

}