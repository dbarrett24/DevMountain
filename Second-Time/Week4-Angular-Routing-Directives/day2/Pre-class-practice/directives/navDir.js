angular.module('directive-practice')
    .directive('navDir', function(){
        return {
            templateUrl: './directives/navDir.html',
            restrict: 'E',
            scope:{
                name: '=', //2-way data binding. Directive and Controller always communicating about this property.
                lastName: '@', //string binding. Takes the string that you pass it.
                alertName: '&' //lets you pass a function to from Controller to the directive.
            }
        }
    });