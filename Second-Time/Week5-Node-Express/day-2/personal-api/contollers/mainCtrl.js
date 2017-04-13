var user = require('../user.js');

module.exports = {
    getName: function(req, res, next){
        // var user1 = {'name': user.name};
        res.status(200).send(user.name);
    },
    getLocation: function (req, res, next){
        // var location1 = {'location': user.location};
        res.status(200).send(user.location);
    },
    getOccupations: function(req, res, next) {
        // var currentOccupation = {'occupation': user.occupations};
        res.status(200).send(user.occupations);
    },
    getLatestOccupation: function(req, res, next) {
        res.status(200).send(user.occupations.length - 1);
    },
    getHobbies: function(req, res, next) {
        res.status(200).send(user.hobbies);
    },
    getHobbyType: function(req, res, next) {
        var results = [];
        var listOfHobbies = user.hobbies;
        for(var i = 0; i < listOfHobbies.length; i++){
            if(listOfHobbies[i].type === req.params.type){
                results.push(listOfHobbies);
            }
        }
        //USING FILTER METHOD
        // results = listOfHobbies.filter(function(){
        //     if(listOfHobbies[i].type === req.params.type){
        //         results.push(listOfHobbies);
        //     }
        // });
        
        res.status(200).send(results);
    },
    getFamily: function(req, res, next) {
        var results = [];
        if(req.query.relation){
            for(var i = 0; i < user.family.length; i++){
                if(user.family[i].relation === req.query.relation){
                    results.push(user.family[i]);
                }
            }
            res.status(200).send(results);
        }
        else{
            res.status(200).send(user.family);
        }
    },
    getFamilyGender: function(req, res, next) {
        var results = [];
        for(var i = 0; i < user.family.gender.length; i++){
            if(user.family[i].gender === req.params.gender){
                results.push(user.family[i]);
            }
            
        }
        res.status(200).send(results);
    },
    getRestaurants: function(req, res, next) {
        res.status(200).send(user.restaurants);
    },
    getRestaurantName: function(req, res, next) {
        var results = [];
        for(var i = 0; i < user.restaurants.length; i++){
            if(user.restaurants[i].name === req.params.name){
                results.push(user.restaurants[i]);
            }
        }
        res.status(200).send(results);
    }
}
