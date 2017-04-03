angular.module('app').controller('rosterCtrl', function($scope, rosterService){
    // ************************************
  $scope.players = rosterService.getPlayers();
    
    

});