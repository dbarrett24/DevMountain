angular.module('app').directive('navDir', function(){
    return {
        restrict: 'E',
        // template: '<p>Hey</p>'
        templateUrl: '../../views/directives/nav-dir.html'
    }
});