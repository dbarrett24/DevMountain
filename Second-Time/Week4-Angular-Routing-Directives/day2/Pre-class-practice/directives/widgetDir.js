angular.module('directive-practice').directive('widgetDir', function(){
    return {
        templateUrl: './directives/widgetDir.html',
        restrict: 'E',
        scope: {
            firstName: '='
        },
        link: function(scope, element, attributes){
            // console.log(scope)
            // console.log(element)
            // console.log(attributes)
            element.css({'color': "blue"});
            // element.text(scope.firstName)
        },
        controller: function($scope, mainService){
            $scope.alertName = function(){
                alert($scope.firstName);
            }
        }
// You can do $http calls, call the service, or do anything you want within this controller.
// You can even use $stateParams
        
        //anything on scope can be accessesd through the link function by typing scope.name-of-thing
    }   //element is the entire HTML element of the directive
})      //the Link function runs as soon as the directive loads.

//LINK allows you to manipulate the DOM with this directive.