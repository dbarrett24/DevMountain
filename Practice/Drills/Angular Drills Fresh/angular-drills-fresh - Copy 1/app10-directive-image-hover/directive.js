angular.module('app').directive('imageDir', function(){
    return{
        restrict: 'E',
        templateUrl: './imageDir.html',
        scope: {
            imageUrl: '@'
        },
        link: function(scope, elem, attr){
            elem.on('mouseover', function(){
                elem.css('opacity', '0.5');
            })
            elem.on('mouseleave', function(){
                elem.css('opacity', '1');
            })
        }
    }
})