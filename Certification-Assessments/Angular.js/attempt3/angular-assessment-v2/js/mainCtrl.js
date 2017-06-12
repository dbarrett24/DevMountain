angular.module('app').controller('mainCtrl', function($scope, mainService){
    $scope.test = mainService.test;

    $scope.getPets = function(){
        mainService.getPets().then(function(response){
            $scope.pets = response;
            console.log($scope.pets)
        })
    }
    $scope.getPets();


    $scope.getPet = function(petId){
        mainService.getPets(petId).then(function(response){
            $scope.pets = response;
            console.log($scope.pets)
        })
    }


});