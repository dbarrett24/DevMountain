const app = require('./server');
// const db = app.get('db');

module.exports = {

    getAllUsers: function(req, res, next){
        req.app.get('db').getAllUsers().then(function (resp){
            res.status(200).send(resp);
        });
    },
    getAllVehicles: function(req, res, next){
        req.app.get('db').getAllVehicles().then(function(resp){
            res.status(200).send(resp);
        });
    },
    addUser: function(req, res, next){
        newUser = [
            req.body.name,
            req.body.email
        ]
        req.app.get('db').addUser(newUser).then(function(resp){
            res.status(200).send(resp);
        });
    },
    addVehicle: function(req, res, next){
        newVehicle = [
            req.body.make,
            req.body.model,
            req.body.year,
            req.body.owner_id
        ]
        req.app.get('db').addVehicle(newVehicle).then(function(resp){
            res.status(200).send(resp);
        });
    },
    countOfCarsById: function(req, res, next){
        req.app.get('db').countOfCarsById(req.params.userId).then(function(resp){
            res.status(200).send(resp);
        });
    },
    vehiclesByUserId: function(req, res, next){
        req.app.get('db').vehiclesByUserId(req.params.userId).then(function(resp){
            res.status(200).send(resp);
        })
    },
    vehiclesByEmail: function(req, res, next){
        if(req.query.userFirstStart){
            req.app.get('db').vehicle_userFirstStart(req.query.userFirstStart).then(function(resp){
                res.status(200).send(resp);
            });
        } else{
            req.app.get('db').vehiclesByEmail(req.query.userEmail).then(function(resp){
                res.status(200).send(resp);
            });
        }

    },
    vehiclesByYear: function(req, res, next){
        req.app.get('db').vehiclesByYear().then(function(resp){
            res.status(200).send(resp);
        });
    },
    updateVehicleOwner: function(req, res, next){
        var newOwner = req.params.userId;
        var vehicle = req.params.vehicleId;
        req.app.get('db').updateVehicleOwner([newOwner, vehicle]).then(function(resp){
            res.status(200).send(resp);
        });
    },
    removeOwnership: function(req, res, next){
        var owner = req.params.userId;
        var vehicle = req.params.vehicleId;
        req.app.get('db').removeOwnership([owner, vehicle]).then(function(resp){
            res.status(200).send(resp);
        });
    },
    deleteVehicleById: function(req, res, next){
        var vehicle = [
            req.params.vehicleId
        ]
        req.app.get('db').deleteVehicleById(vehicle).then(function(resp){
            res.status(200).send(resp);
        });
    }





}
