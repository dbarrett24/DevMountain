angular.module('directivePractice').controller('lessonCtrl', function($scope, lessonService){
    $scope.test = "Two Way Data binding!";
    $scope.test1 = lessonService.test1;

    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

    $scope.announceDay = function(lesson, day){
        if(day){
            alert(lesson + ' is active on ' + day + '.');
        }
        else{
            alert(lesson + ' has not been scheduled.');
        }
    }


});
