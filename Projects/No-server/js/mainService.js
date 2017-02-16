angular.module("brawlApp").service("mainService", function($http){
    this.test1 = "Service is working";
    var baseUrl = "https://probasketballapi.com/";
    var playerStats = "stats/players/";
    var players = "players/";
    var apiKey = 'api_key=n1g0ROhXI4FQWelrt6uLAZk7PET3Y9U5';
    console.log(baseUrl + players + apiKey);
   
    this.getData = function($http){
        return $http ({
            method: "POST",
            url: baseUrl + apiKey
        
        }).then(function(response){
            console.log(response.data);
            return response.data;
        });

    }
    this.getPlayers = function($http){
        return $http ({
            method: "POST",
            url: baseUrl + players + apiKey,
        
        }).then(function(response){
            console.log(url);
            console.log(response.data);
            return response.data;
        });

    }
    this.getPlayerStats = function($http){
        return $http ({
            method: "POST",
            url: baseUrl + playerStats + apiKey
        
        }).then(function(response){
            console.log(response.data);
            return response.data;
        });

    }
});