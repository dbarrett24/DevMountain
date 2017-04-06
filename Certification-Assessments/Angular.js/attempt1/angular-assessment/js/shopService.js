angular.module('assessment').service('shopService', function($http){

    this.test = "Controller and Service are working."

    this.getItems = function(){
        return $http({
            method: 'GET',
            url: "http://practiceapi.devmounta.in/products"
        }).then(function(response){
            if(response.status === 200){
                console.log(response.data)
                return response.data;
            }
            else{
                return "Didn't pull data";
            }
        })
    }

    this.getItemDetails = function(id){
        return $http({
            method: 'GET',
            url: "http://practiceapi.devmounta.in/products/" + id + '/'
        }).then(function(response){
            if(response.status === 200){
                console.log(response.data)
                return response.data;
            }
            else{
                console.log( "Didn't pull data");
            }
        })
    }
     

})