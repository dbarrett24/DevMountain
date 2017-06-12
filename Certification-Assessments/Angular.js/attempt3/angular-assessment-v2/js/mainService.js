angular.module('app').service('mainService', function($http){
    this.test = "Controller and Service are working";

    var baseurl = 'https://practiceapi.devmountain.com/pets';

    this.getPets = function(){
        return $http({
            method: 'GET',
            url: baseurl
        }).then(function(response){
            return response.data;
        });
    }

    this.getPet = function(petId){
        return $http({
            method: 'GET',
            url: baseurl + petId
        }).then(function(response){
            return response.data;
        });
    }
    
});