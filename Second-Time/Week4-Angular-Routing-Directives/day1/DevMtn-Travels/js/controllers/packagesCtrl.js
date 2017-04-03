angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainService){
    $scope.test = "Packages Ctrl";

    $scope.travelInfo = mainService.travelInfo;
});