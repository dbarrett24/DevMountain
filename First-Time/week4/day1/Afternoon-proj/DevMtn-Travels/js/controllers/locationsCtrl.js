angular.module("devmtnTravel").controller("locationsCtrl", function($scope, mainSrv){
    $scope.test = "Locations Ctrl Working";
    
    $scope.travelInfo = mainSrv.travelInfo;

})