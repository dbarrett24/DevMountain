const app = require('./index.js');
const db = app.get('db');

module.exports = {
    Create: function(req, res, next){
        console.log(req.body);
        var name = req.body.name;
        var desc = req.body.description;
        var price = req.body.price;
        var img = req.body.imageUrl;
        db.create_product([name, desc, price, img], function(err, newProduct){
            res.status(200).send(newProduct);
        })
    },
    GetAll: function(req, res, next){
        db.read_products(function(err, products){
            res.status(200).send(products);
        })
    },
    GetOne: function(req, res, next){
        var id = req.query.id;
        db.read_product([id], function(err, product){
            res.status(200).send(product);
        })
    },
    Update: function(req, res, next){
        db.update_product([desc, id], function(err, updatedProduct){
            res.status(200).send(updatedProduct);
        })
    },
    Delete: function(req, res, next){
        db.delete_product([id], function(err, deleted){
            res.status(200).send("Product successfully deleted", deleted);
        })
    }
}