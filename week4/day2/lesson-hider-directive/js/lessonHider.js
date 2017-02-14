angular.module("app")

.directive("lessonHider", function(){
    return {
        restrict: "E",
        templateUrl: "lessonHider.html",
        scope: {
            lesson: "=",
            dayAlert: "&"
            
        },
        link: function(scope, element, attrs){
            scope.getSchedule.then(function(response){
                scope.schedule = response.data;

                scope.schedule.forEach(function(scheduleDay){
                    if(scheduleDay.lesson === scope.lesson){
                        element.css("text-decoration", "line-through");
                        scope.lessonDay = scheduleDay.weekday;
                        return;
                    }
                    
                })

                

                
            });
        },

        controller: function($scope, lessonService){
            $scope.getSchedule = lessonService.getSchedule();
        }
    }
});