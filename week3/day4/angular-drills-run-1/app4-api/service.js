angular.module("apiApp").service("mainService", function($http){
    this.test1 = "Service is working";

    this.getData = function(){
        return $http({
            method: "GET",
            url: "http://swapi.co/api/people/"
        }).then(function(results){
            console.log(results.data);
            return results.data;
        })
    }

});


