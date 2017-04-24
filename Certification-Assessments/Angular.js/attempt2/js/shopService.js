angular.module('app').service('shopService', function($http){
    
    this.test1 = "Service is working";
    
    return $http({
        method: "GET"
    })
});