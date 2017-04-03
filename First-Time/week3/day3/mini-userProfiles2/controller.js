angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.currentPage = 2;

  $scope.getUsers = function() {
    var promise = mainService.getUsers($scope.currentPage);
    promise.then(function(usersObj){
      $scope.users = usersObj.data;
      $scope.total_pages = usersObj.total_pages;
    });
  }
  
  $scope.prev = function(){
    if($scope.currentPage > 1){
      $scope.currentPage--;
      $scope.getUsers();
    }
  };

  $scope.next = function(){
    if($scope.currentPage < $scope.total_pages){
      $scope.currentPage++;
      $scope.getUsers();
    }
  };

  $scope.getUsers();

});