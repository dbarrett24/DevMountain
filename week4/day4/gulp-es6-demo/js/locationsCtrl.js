angular.module('devmtnTravel')
.controller("locationsCtrl", function($scope, mainSrv) {
  this.locations = mainSrv.travelInfo;
})
