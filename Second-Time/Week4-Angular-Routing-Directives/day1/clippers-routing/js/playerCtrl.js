angular.module('app').controller('playerCtrl', function($scope, rosterService, $stateParams){
    // ************************************
  $scope.player = rosterService.findPlayerById($stateParams.id);
    
    

});