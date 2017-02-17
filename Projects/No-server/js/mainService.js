angular.module("brawlApp").service("mainService", function(){
    // *********************************** 
    //                TEST
    this.test1 = "Service is working";
    // *********************************** 

    var baseUrl = "https://probasketballapi.com/";
    var playerStats = "stats/players/";
    var players = "players/";
    var apiKey = '46dbbda6eb33623048fb17208f8bea1c';
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
    
});