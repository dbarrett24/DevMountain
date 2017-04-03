angular.module('userProfiles').controller('MainController', function($scope, mainService){
    
    $scope.thisAppIsBroken = "This angular app is working";
   
    $scope.getUsers = function(){
       $scope.users = mainService.getUsers();
    }

    $scope.getUsers();
   
    $scope.toggleFavorite = mainService.toggleFavorite; //NOT invoked! It is pointed to. The service runs it 
    //when the user pushes the button. The controller's job isn't to RUN the functions, but to communicate between view and service.
})