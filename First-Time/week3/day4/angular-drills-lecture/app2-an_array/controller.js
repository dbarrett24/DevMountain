angular.module("arrayApp").controller("arrayController", function($scope, arraySVC){
    $scope.test = "controller is working";
    $scope.test1 = arraySVC.test1;

    $scope.employees = arraySVC.getData();

});