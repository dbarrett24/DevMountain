angular.module("timeApp").controller("mainCtrl", function($scope){

    $scope.test = "controller working";
    $scope.name = "David";
    

    console.log($scope.test, $scope.name);
});