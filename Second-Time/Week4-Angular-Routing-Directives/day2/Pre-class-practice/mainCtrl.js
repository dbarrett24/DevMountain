angular.module('directive-practice').controller('mainCtrl', function($scope, mainService){
    
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;
})