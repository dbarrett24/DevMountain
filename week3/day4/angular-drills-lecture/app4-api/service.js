angular.module("apiApp").service("mainService", function($http){
    this.test1 = "Service is working";


   
    this.getData = function(num){
         var baseUrl = "http://pokeapi.co/api/v2/pokemon/"+ num +"/"
        return $http({
            method: "GET",
            url: baseUrl
        }).then(function(response){
            if(response.status === 200){
            console.log(response.data);
            return response.data;
        }
        else{
            return "What button did you press? Did you press the RED button?!"
        }
    })
    
    }

});

