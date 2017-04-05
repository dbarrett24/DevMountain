angular.module('arrayApp').controller('mainCtrl', function($scope, mainService){
    $scope.data = mainService.myData;


})