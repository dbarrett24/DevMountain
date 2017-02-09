angular.module("apiApp").controller("mainCtrl", function($scope, mainService){
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;
    
    
    $scope.pokemonArray = [];
    $scope.getData = function(num){
        var promise = mainService.getData(num);
        promise.then(function(pokemon){
            $scope.pokemonArray.push(pokemon);
        });
    }
    
    for(var i = 1; i < 10; i++){
        $scope.getData(i);
    }
});