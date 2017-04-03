angular.module("myApp")
.controller("playerCtrl", function($scope, playerService, $stateParams){
    $scope.player = playerService.getPlayerById($stateParams.id)
});