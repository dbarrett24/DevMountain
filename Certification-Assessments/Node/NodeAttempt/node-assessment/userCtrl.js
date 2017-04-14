const users = require('./users');

module.exports = {
    readAll: function(){
        return users.index();
    },
    findUserById: function(userId, value){
        if(userId && value == req.params.id){
            return users.find(userId, value);
        }
        else{
            return null;
        }
        //if no user with that id, return Null

    },
    getAdmins: function(type, value){
        var results = [];
        if(type && value == "admin"){
            results.push(users.find(type, value));
            return results;
        }
        else{
            return null;
        }
    },
    getNonAdmins: function(type, value){
        var results = [];
        if(type && value !== "admin"){
            results.push(users.find(type, value));
            return results;
        }
        else{
            return null;
        }
    },
    getUsersByFavorite: function(type, value){
        var results = [];
        if(type && value == req.params.favorite){
            results.push(users.find(type, value));
            return results;
        }
        else{
            return null;
        }

    },
    getUsersByFavorite: function(type, value){
        var results = [];
        if(type && value == req.params.favorite){
            results.push(users.find(type, value));
            return results;
        }
        else{
            return null;
        }

    },
    


        
}