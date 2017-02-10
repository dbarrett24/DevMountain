angular.module("arrayApp").controller("mainCtrl", function($scope, mainService){
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;

    $scope.employees = mainService.getData();
        
});