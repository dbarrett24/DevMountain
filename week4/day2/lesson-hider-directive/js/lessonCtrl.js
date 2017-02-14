angular.module("app").controller("lessonCtrl", function($scope, lessonService){

    $scope.lessons = ["Services", "Routing", "Directives", "Review", "Firebase", "No server project", "Node", "Express", "Mongo"];
    // Because of Isolate scope (scope: {}), we've cut the directive off from this controller's scope and it can no longer access the above array
    
    $scope.test = "Two-way data binding!";
    //to access this, we pass "test" through  as an attribute of the directive so the directive's html can access it.
    $scope.announceDay = function(lesson, day){
        if(day === undefined){
            alert("Nothing scheduled yet");
        }
        else{
            alert(lesson + " is active on " + day + ".")
        }
    }

    $scope.removeItem = function(){
        delete(lesson);
    }

});