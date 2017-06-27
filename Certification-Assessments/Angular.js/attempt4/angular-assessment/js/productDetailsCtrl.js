angular.module('assessment').controller('productDetailsCtrl', function($scope, shopService, $stateParams){

    $scope.test = shopService.test;


    $scope.getProduct = function(productId){
        shopService.getProducts(productId).then(function(response){
            for(var i = 0; i < response.length; i++){
                if(response[i].id === $stateParams.id){
                    $scope.productDetails = response[i];
                }
            }
            console.log('=========Product Details=============');
            console.log($scope.productDetails);
            console.log('====================================');
        })
    }
    $scope.getProduct();

})