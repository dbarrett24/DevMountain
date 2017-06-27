const userData = require('./userData.json');
module.exports = {
    getAllUsers: function(req, res, next){
        res.status(200).send(userData);
    },
    getUsersUnder40: function(req, res, next){
        userData.forEach(function(){
            
        })
        res.status(200).send(userData);
    }
}