angular.module('app').directive('loginForm', function(){
    return {
        templateUrl: '/',
        restrict: 'AE',
        scope: {
            buttonText: '@',
            placeholderText: '='
        },
        // link: function(scope, elem, attr){

        // }
    }
});