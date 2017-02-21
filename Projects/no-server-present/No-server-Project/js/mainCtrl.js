angular.module("brawlApp").controller("mainCtrl", function($scope, mainService){
// ***********************************   
//                TEST 
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;
// ***********************************  
    
    console.log("mainCtrl");
 
        mainService.getPlayers().then(function(players){
            $scope.players = players.players;
            // console.log($scope.players);
        });
  

        mainService.getTeams().then(function(teams){
            $scope.teams = teams;
            // console.log($scope.teams)
            $scope.teamSlug = $scope.teams.slug;
        });
   
    
   
        mainService.getPlayersStats().then(function(playerStats){
            $scope.playerStats = playerStats.player_season_stats;
            // console.log($scope.playerStats);
        });
    
    

});

