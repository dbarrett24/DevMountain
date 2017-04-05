angular.module('app').directive('loginDir', function(){
    return{
        restrict: 'E',
        templateUrl: '/login.html',
        scope: {
            loginClick: '&'
        }
        
    }
})