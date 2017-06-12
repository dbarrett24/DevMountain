angular.module('assessment').service('shopService', function($http){

    this.test = "Controller and Service are working"
    var baseurl = 'https://practiceapi.devmountain.com/products';

    this.getProducts = function(){
        return $http({
            method: 'GET',
            url: baseurl
        }).then(function(response){
            return response.data;
        })
    }

    this.getProduct = function(productId){
        return $http({
            method: 'GET',
            url: baseurl + '/' + productId
        }).then(function(response){
            return response.data;
        })
    }


})