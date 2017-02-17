angular.module("brawlApp").controller("mainCtrl", function($scope, mainService){
// ***********************************   
//                TEST 
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;
// ***********************************   

$scope.players = mainService.getPlayers();
console.log($scope.players);

// $scope.teamRoster = mainService.getRosters();

// $scope.playerStats = mainService.getPlayerStats();
});

