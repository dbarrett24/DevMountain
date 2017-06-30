const userData = require('./userData.json');
const userFilters = require('./userFilters');
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
    }
}
    // getUsersByAgeLimit: function(){
    //     var filteredByAgeLimit = userData.filter(function(user){
    //         return user.age < req.query.age;
    //     });
    //     res.status(200).send(filteredByAgeLimit);
    // }
