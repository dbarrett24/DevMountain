const app = require('./server');

module.exports = {
    getAllUsers: (req, res, next)=>{
        req.app.get('db').getAllUsers().then(resp =>{
            res.status(200).send(resp);
        })
    },
    getAllVehicles: (req, res, next)=>{
        req.app.get('db').getAllVehicles().then(resp =>{
            res.status(200).send(resp);
        })
    },
    addUser: (req, res, next)=>{
        let newUser = [
            req.body.name,
            req.body.email
        ]
        req.app.get('db').addUser(newUser).then(resp=>{
            res.status(200).send(resp);
        })
    },
    addVehicle: (req, res, next)=>{
        let newVehicle = [
            req.body.make,
            req.body.model,
            req.body.year,
            req.body.owner_id
        ]
        req.app.get('db').addVehicle(newVehicle).then(resp=>{
            res.status(200).send(resp);
        })
    },
    countOfCarsById: (req, res, next)=>{
        req.app.get('db').countOfCarsById(req.params.userId).then(resp=>{
            res.status(200).send(resp);
        })
    },
    vehiclesByUserId: (req, res, next)=>{
        req.app.get('db').vehiclesByUserId(req.params.userId).then(resp=>{
            res.status(200).send(resp);
        })
    },
    vehiclesByEmail: (req, res, next)=>{
        if(req.query.userFirstStart){
            req.app.get('db').userFirstStart(req.query.userFirstStart).then(resp=>{
                res.status(200).send(resp);
            })
        }
        else{
            req.app.get('db').vehiclesByEmail(req.query.userEmail).then(resp=>{
                res.status(200).send(resp);
            })
        }
    },
    vehiclesByYear: (req, res, next)=>{
        req.app.get('db').vehiclesByYear().then(resp=>{
            res.status(200).send(resp);
        })
    },
    updateVehicleOwner: (req, res, next)=>{
        let newOwner = req.params.userId;
        let vehicle = req.params.vehicleId;
        req.app.get('db').changeOwnership([newOwner, vehicle]).then(resp=>{
            res.status(200).send(resp);
        })
    },
    removeOwnership: (req, res, next)=>{
        let owner = req.params.userId;
        let vehicle = req.params.vehicleId;
        req.app.get('db').removeOwnership([owner, vehicle]).then(resp=>{
            res.status(200).send(resp);
        })
    },
    deleteVehicleById: (req, res, next)=>{
        let vehicle = req.params.vehicleId;
        req.app.get('db').deleteVehicleById(vehicle).then(resp=>{
            res.status(200).send(resp);
        })
    },






}
