angular.module('devmtnTravel')
.controller('packagesCtrl', function($scope, mainSrv) {
    $scope.packages = mainSrv.travelInfo;

    $scope.lowestPrice = (function() {
      var lowest = $scope.packages.reduce(function(a,b) {
        return a.price < b.price ? a.price : b.price
      })
      // lowest = lowest.toString().replace(/(\d{3})+(?!\d)/, ',')
      return lowest;
    })();
})
