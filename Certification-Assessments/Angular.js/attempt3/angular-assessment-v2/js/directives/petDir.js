angular.module('app').directive('petDir', function(){
    return {
        restrict: 'AE',
        templateUrl: './views/pet-tmpl.html',
        scope: {
            // pet: '@'
        }
    }
})