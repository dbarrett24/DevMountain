angular.module("devmtnTravel").controller("packagesCtrl", function($scope, mainSrv){
    $scope.test = " Packages Ctrl Working";
    
    $scope.travelInfo = mainSrv.travelInfo;
})