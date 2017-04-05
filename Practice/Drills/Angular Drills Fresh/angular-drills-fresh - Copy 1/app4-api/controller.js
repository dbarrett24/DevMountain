angular.module('apiApp').controller('mainCtrl', function($scope, mainService){

    $scope.starshipArray = [];

    $scope.getShips = function(num){
        mainService.getShips(num).then(function(ships){
            console.log(ships)
            $scope.starshipArray.push(ships);
        })
    }


    for(var i = 0; i < 10; i++){
        $scope.getShips(i);
    }

});