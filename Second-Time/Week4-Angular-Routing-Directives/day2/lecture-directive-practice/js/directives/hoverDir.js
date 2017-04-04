angular.module('app').directive('hoverDir',function(){
    return{
        restrict: 'A',
        link: function(scope, element, attributes){


            element.on('mouseover', function(){
                element.css('background-color', 'blue');
            })
            element.on('mouseout', function(){
                element.css('background-color', 'black');
            })
        }
    }
})