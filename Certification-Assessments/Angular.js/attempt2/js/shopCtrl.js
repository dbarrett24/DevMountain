angular.module('app').controller('shopCtrl', function($scope, shopService){
    // ****************
    $scope.test = "Controller is working";
    $scope.test1 = shopService.test1;
    // ****************
});