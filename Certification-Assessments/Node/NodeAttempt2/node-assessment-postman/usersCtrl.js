const userData = require('./userData.json');
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
                        for (var j = 0; j < userData[i].favorites.length; j++){
                            if(userData[i].favorites[j] == value){
                                result.push(userData[i]);
                            }
                        }
                    }
                    break;
                case 'age':
                    for(var i = 0; i < userData.length; i++){
                        if(userData[i].age < value){
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
            if (!value) {
                return res.status(200).send(userData);
            }
            if (key == "email") {
                return res.status(200).json(result[0]);
            }
            return res.status(200).json(result);

        }
    },
    getUserById: function(req, res, next){
        var id = req.params.id;
        console.log(id);

        for(var i = 0; i < userData.length; i++){
            if(userData[i].id == id){
                return res.status(200).json(userData[i])
            }
            else{
                return res.status(404).send('null');
            }
        }
    },
    getAdmins: function(req, res, next){
        var admins = [];
        for(var i = 0; i < userData.length; i++){
            if(userData[i].type === "admin"){
                admins.push(userData[i]);
            }
        }
        return res.status(200).send(admins)
    },
    getNonAdmins: function(req, res, next){
        var nonAdmins = [];
        for (var i = 0; i < userData.length; i++) {
            if (userData[i].type !== "admin") {
                nonAdmins.push(userData[i]);
            }
        }
        return res.status(200).send(nonAdmins)
    },
    getUsersByType: function(req, res, next){
        var userType = req.params.userType;
        console.log(userType)
        var users = [];
        
        for(var i = 0; i < userData.length; i++){
            if(userData[i].type == userType){
                users.push(userData[i]);
            }
        }
        return res.status(200).send(users);
    },
    updateUserById: function(req, res, next){
        var userId = req.params.userId;
        console.log(req.params.userId);
        
        for(var i = 0; i < userData.length; i++){
            if(userData[i].id == userId){
                Object.assign(userData[i], req.body);
            }
        }
        return res.status(200).json(userData);
    },
    addUser: function(req, res, next){
        var newUser = req.body;
        newUser.id = userData.length + 1;
        console.log(newUser);
        userData.push(newUser);

        return res.status(200).send(userData);
    },
    deleteUser: function(req, res, next){
        userId = req.params.userId;
        console.log(userId);

        for(var i = 0; i < userData.length; i++){
            if(userData[i].id == userId){
                userData.splice(i, 1);
                return res.status(200).send(userData);
            }
            else{
                next;
            }
        }
    }
}










    // getUsersByAgeLimit: function(){
    //     var filteredByAgeLimit = userData.filter(function(user){
    //         return user.age < req.query.age;
    //     });
    //     res.status(200).send(filteredByAgeLimit);
    // }
