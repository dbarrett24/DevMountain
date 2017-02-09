angular.module("myApp").controller("mainCtrl", function($scope, mainSvc){
    $scope.test = "Controller is working";
    $scope.test1 = mainSvc.test1;

    $scope.employees = mainSvc.getData();
});