angular.module('swapi')
.controller('detailsCtrl', function($scope, swapiService, $stateParams) {


  swapiService.getData().then(function(res) {

    for (var i = 0; i < res.length; i++) {
      if (res[i].name === $stateParams.planetname) {
        $scope.singlePlanet = res[i]
        console.log('single --->: ', $scope.singlePlanet)
      }
    }

  })







})
