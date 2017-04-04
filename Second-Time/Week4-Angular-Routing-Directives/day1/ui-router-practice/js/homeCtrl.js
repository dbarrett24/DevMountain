angular.module('movies').controller('homeCtrl', function($scope, mainService, $stateParams){
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;

    $scope.movies = mainService.movies;
})