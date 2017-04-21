angular.module('app').service('shopService', function($http){
    return $http({
        method: "GET"
    })
});