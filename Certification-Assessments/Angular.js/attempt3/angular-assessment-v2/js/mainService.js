angular.module('app').service('mainService', function($http){
    this.test = "Controller and Service are working";

    var baseurl = 'http://practiceapi.devmounta.in/pets';

    this.getPets = function(){
        return $http({
            method: 'GET',
            url: baseurl
        }).then(function(response){
            return response.data;
        });
    }
    
});