angular.module('app').controller('mainCtrl', function($scope, mainService){
    
    $scope.getData = function(){
        mainService.getData().then(function(ships){
            $scope.ships = ships;
            console.log($scope.ships);
        })
    }
    $scope.getData();


})