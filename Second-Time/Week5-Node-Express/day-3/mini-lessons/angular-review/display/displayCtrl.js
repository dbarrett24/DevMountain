angular.module('swapi')
.controller('displayCtrl', function($scope, swapiService,$stateParams) {
  function getData() {
    swapiService.getData().then(function(response) {

      $scope.planets = response;
      console.log(response);
    })
  }
  getData()


})
