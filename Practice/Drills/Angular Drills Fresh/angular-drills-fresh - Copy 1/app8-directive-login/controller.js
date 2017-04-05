angular.module('app').controller('mainCtrl', function($scope, mainService){
    $scope.login = function(){
        alert("Incorrect user information. You are not an admin");
    }
})