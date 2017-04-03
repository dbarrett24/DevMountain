angular.module("triviaApp").service("mainService", function($http){
    this.test1 = "service is working";
    
    this.getData = function(pageNum){
        return $http({
            method: "GET",
            url: "https://practiceapi.devmountain.com/api/trivia/questions?page=" + pageNum
        }).then(function(response){
            if(response.status === 200){
                console.log(response.data);
                return response.data;
            }
            else{
                return "Try a different Castle, ssssssilly ssssavage."
            }
        });
    };





})