angular.module("myApp")
.directive("inputBox", function(){
    return {
        restrict: "AE",
        scope: {
            title: "=",
            default: "@"
        },
        templateUrl: "myDirective.html",
        controller: function($scope){
            $scope.saySomething = function(something){
                alert(something);
            }
        }
    };

});