angular.module('assessment').controller('productDetailsCtrl', function($scope, shopService, $stateParams){

    $scope.test = shopService.test;


    $scope.getProduct = function(productId){
        shopService.getProducts(productId).then(function(response){
            $scope.product = response;
            console.log('====================================');
            console.log($scope.products);
            console.log('====================================');
        })
    }


})