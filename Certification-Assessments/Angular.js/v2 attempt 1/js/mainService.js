angular.module('app').service('mainService', function($http){

// *****************
this.test = "Service and Controller are working!";
// *****************
    this.getPets = function(){
        return $http({
            method: "GET",
            url: "http://practiceapi.devmounta.in/pets"
        }).then(function(response){
            if(response.status === 200){
                console.log(response.data)
                return response.data;
            }
            else{
                return "Unable to retrieve data...";
            }
        })
    }




    
})