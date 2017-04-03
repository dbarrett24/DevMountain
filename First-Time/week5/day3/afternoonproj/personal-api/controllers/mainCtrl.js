var user = require('../user.js');

module.exports = {
    getName: function(req, res, next) {
        var user1 = {"name": user.name};
        res.status(200).json(user1);
    },
    getLocation: function(req, res, next){
        var location1 = {"location": user.location};
        res.status(200).json(location1);
    },
    getOccupations: function(req, res, next){
        var currentOccupation = {"occupations": user.occupations};
        res.status(200).json(currentOccupation);
    },
    getLatestOccupation: function(req, res, next){
        var listOfOccupations = user.occupations;
        var length = listOfOccupations.length - 1;
        var latest = {'latestOccupation': listOfOccupations[length]};
        res.status(200).json(latest);
    },
    getHobbies: function(req, res, next) {
        var hobbies1 = {"hobbies": user.hobbies};
        res.status(200).json(hobbies1);
    },
    getHobbiesType: function(req, res, next) {
        var results = [];
        var listOfHobbies = user.hobbies;
        for (var i in listOfHobbies) {
            if (listOfHobbies[i].type === req.params.type) {
                results.push(listOfHobbies[i]);
            }
        }
        res.json(results);
    },
    getFamily: function(req, res, next) {
        res.json(user.family);
    },
    getFamilyGender: function(req, res, next) {
        var famResults = [];
        var famMembers = user.family;
        for (var i in famMembers) {
            if (famMembers[i].gender === req.params.gender) {
                famResults.push(famMembers[i]);
            }
        }
        res.json(famResults);    
    },
    getRestaurants: function(req, res, next) {
        res.json(user.restaurants);
    }  
}