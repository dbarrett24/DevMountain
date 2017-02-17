angular.module("brawlApp").service("mainService", function($http){
    // *********************************** 
    //                TEST
    this.test1 = "Service is working";
    // *********************************** 

    // var baseUrl = "https://probasketballapi.com/";
    // var playerStats = "stats/players/";
    // var players = "players/";
    // var apiKey = '46dbbda6eb33623048fb17208f8bea1c';
    
   
    // this.getPlayers = function(){
    //     $http.get('/api/getPlayers').then(players => {
    //         console.log(players.data)
    //         return players.data;
    //     })
        
    // }
    // console.log()

    this.getPlayers = function(){
        return $http({
            method: "GET",
            url: "../JSON/players.json"
        })
    }
});