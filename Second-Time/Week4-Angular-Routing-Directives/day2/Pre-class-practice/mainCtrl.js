angular.module('directive-practice').controller('mainCtrl', function($scope, mainService){
    
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;

    $scope.name = "David";

    $scope.whatsMyName = function(){
        alert($scope.name);
    }
})