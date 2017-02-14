angular.module("app").service("lessonService", function($http){

    this.test1 = "Service is working";
    
    this.getSchedule = function(){
        return $http.get("schedule.json");
    };
    
});