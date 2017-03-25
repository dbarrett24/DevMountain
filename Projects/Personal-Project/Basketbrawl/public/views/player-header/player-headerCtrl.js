angular.module("brawlApp").controller("player-headerCtrl", function($scope, mainService, $stateParams){
    mainService.getTeams()
            .then(function(teamData){
                $scope.teamData = teamData;
                console.log("teamJSON", $scope.teamData);
            })
});