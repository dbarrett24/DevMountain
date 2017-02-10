angular.module("apiApp").controller("mainCtrl", function($scope, mainService){
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;

    $scope.getData = function(){
        var promise = mainService.getData();
        promise.then(function(results){
            $scope.persons = results.results;
            console.log($scope.persons);
        });
    }
    $scope.getData();
});