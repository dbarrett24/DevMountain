angular.module('directivePractice').directive('lessonHider', function(){
    return {
        templateUrl: './js/directives/lessonHider.html',
        restrict: 'E',
        scope: {
            lesson: '=',
            dayAlert: '&',
            toggle: '&'
        },
        link: function(scope, elem, attr){
            
            //Get the data, and display it according to what is scheduled.
            scope.getSchedule.then(function(response){
                scope.schedule = response.data;

                for(var i = 0; i < scope.schedule.length; i++){
                    if(scope.lesson === scope.schedule[i].lesson){
                        elem.css('text-decoration', 'line-through');
                        //we put the .then in the link because we have to DO jQuery things with out data once we receive it.
                        elem.find("input").prop('checked', true);
                        
                        scope.lessonDay = scope.schedule[i].weekday

                        return;
                    }
                }
            })

            //Toggle On or off when checkbox is clicked
                        
                        console.log(elem)
                $scope.toggle = function(){
                    elem.toggle(function(){
                        elem.css('text-decoration', 'line-through');
                    }, function(){
                        elem.css('text-decoration', 'none');
                    });

                }
            
                    

                
                
            // console.log(scope, elem, attr)
        },
        controller: function($scope, lessonService){
            $scope.getSchedule = lessonService.getSchedule();

            $scope.toggle;
        }
    }
});