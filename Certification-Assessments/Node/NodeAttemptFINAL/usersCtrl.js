const userData = require('./userData.json')
module.exports = {
    getAllUsers: function(req, res, next){
        if(req.query != {}){
            var key = Object.keys(req.query)[0];
            console.log(key);
            var value = req.query[key];
            console.log(value)
            var result = [];
            switch (key) {
                case 'favorites':
                    for(var i = 0; i < userData.length; i++){
                        for(var j = 0; j < userData[i].favorites.length; j++){
                            if(userData[i].favorites[j] == value){
                                result.push(userData[i]);
                            }
                        }
                    }
                    break;
                case 'age':
                    for(var i = 0; i < userData.length; i++){
                        if(userData[i].age < value){
                            console.log(result)
                            result.push(userData[i]);
                        }
                    }
                    break;
                case 'lastname':
                    for(var i = 0; i < userData.length; i++){
                        if(userData[i].last_name == value){
                            result.push(userData[i]);
                        }
                    }
                    break;
                case 'email':
                    for(var i = 0; i < userData.length; i++){
                        if(userData[i].email == value){
                            result.push(userData[i]);
                        }
                    }
                    break;
            }
            if(!value){
                return res.status(200).send(userData);
            }
            else if(key == 'email'){
                return res.status(200).json(result[0])
            }
            return res.status(200).json(result);

        }
    },
    getUserById: function(req, res, next){
        var userId = req.params.id;
        for(var i = 0; i < userData.length; i++){
            if(userData[i].id == userId){
                return res.status(200).send(userData[i]);
            }
        }
        return res.status(404).json(null);
    },
    getAdmins: function(req, res, next){
        var admins = [];
        for(var i = 0; i < userData.length; i++){
            if(userData[i].type === 'admin'){
                admins.push(userData[i]);
            }
        }
        return res.status(200).send(admins);
    },
    getNonAdmins: function(req, res, next){
        var nonAdmins = [];
        for(var i = 0; i < userData.length; i++) {
            if (userData[i].type !== 'admin') {
                nonAdmins.push(userData[i]);
            }
        }
        return res.status(200).send(nonAdmins);
    },
    getUsersByType: function(req, res, next){
        var userType = req.params.userType;
        var usersMatch = [];
        for(var i = 0; i < userData.length; i++){
            if(userData[i].type === userType){
                usersMatch.push(userData[i]);
            }
        }
        return res.status(200).send(usersMatch);
    },
    updateUserById: function(req, res, next){
        var userId = req.params.userId;
        for(var i = 0; i < userData.length; i++){
            if(userData[i].id == userId){
                Object.assign(userData[i], req.body);
            }
        }
        return res.status(200).send(userData);
    },
    addUser: function(req, res, next){
        var newUser = req.body;
        newUser.id = userData.length + 1;
        userData.push(newUser);

        return res.status(200).send(userData);
    },
    deleteUser: function(req, res, next){
        var userId = req.params.userId;
        for(var i = 0; i < userData.length; i++){
            if(userData[i].id == userId){
                userData.splice(i, 1)
            }
        }
        return res.status(200).send(userData);
    }
}