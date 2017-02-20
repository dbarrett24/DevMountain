angular.module("brawlApp").controller("rosterCtrl", function($scope, mainService){
    // $scope.test1 = "RosterCTRL WORKING";
    var leftPlayer = [];
    var rightPlayer = [];
    
    $scope.addLeft = function(){
        
    }
    $scope.addRight = function(){

    }

// Functions
    // GET DATA
    $scope.getRosters = function(){
        mainService.getRosters().then(function(rosters){
            $scope.rosters = rosters;
            console.log($scope.rosters);
        });
    };
    $scope.getPlayerStats = function(){
        mainService.getPlayersStats().then(function(playerStats){
            $scope.playerStats = playerStats.player_season_stats;
            console.log($scope.playerStats);
        });
    };
// Invoked on Startup
    // GET DATA
    $scope.getRosters();
    $scope.getPlayerStats();
});