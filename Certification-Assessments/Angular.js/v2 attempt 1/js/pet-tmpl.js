angular.module('app').directive('petTmpl', function(){
    return {
        restrict: 'E',
        templateUrl: '../views/pet-tmpl.html',
        scope: {
            
        },
        link: function(scope, elem, attrs){
            //do JQuery things in here.
        }
    }
});