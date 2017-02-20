angular.module("brawlApp").controller("mainCtrl", function($scope, mainService){
// ***********************************   
//                TEST 
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;
// ***********************************  
    

    $scope.getPlayers = function(){
        mainService.getPlayers().then(function(players){
            $scope.players = players.players;
            // console.log($scope.players);
        });
    };

    $scope.getTeams = function(){
        mainService.getTeams().then(function(teams){
            $scope.teams = teams;
            // console.log($scope.teams)
            $scope.teamSlug = $scope.teams.slug;
        });
    };
    
    $scope.getPlayerStats = function(){
        mainService.getPlayersStats().then(function(playerStats){
            $scope.playerStats = playerStats.player_season_stats;
            // console.log($scope.playerStats);
        });
    };
    

    var onStartUp = function(){
        $scope.getPlayers();
        ;
        $scope.getPlayerStats();


    };
    onStartUp();
});

