angular.module('app').directive('showTime', function(){
    return {
        template: '<div>The current time is {{time}} </div>',
        restrict: 'E',
        link: function(scope, elem, attr){
            var currentTime = new Date();
            scope.time = currentTime.toString();
            
        }
    }
});