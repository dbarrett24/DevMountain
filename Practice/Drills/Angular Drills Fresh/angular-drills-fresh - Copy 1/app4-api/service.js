angular.module('apiApp').service('mainService', function($http){
    
    this.getShips = function(num){
    var baseUrl = 'http://swapi.co/api/starships/';
        return $http({
            method: 'GET',
            url: baseUrl
        }).then(function(response){
            if(response.status === 200){
                console.log(response.data.results);
                return response.data.results;
            }
            else{
                return "Could not retrieve data";
            }
        })
    }
});