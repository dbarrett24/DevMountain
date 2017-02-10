angular.module("myApp").controller("mainCtrl", function($scope, mainService){

    $scope.test = "controller is working";
    $scope.test1 = mainService.test1;

    
})