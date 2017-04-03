angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainService){
    $scope.test = "locations Ctrl";

    $scope.travelInfo = mainService.travelInfo;
});