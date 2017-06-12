angular.module('assessment').controller('shopCtrl', function($scope, shopService){

$scope.test = shopService.test;


$scope.getProducts = function(){
    shopService.getProducts().then(function(response){
        $scope.products = response;
        console.log('====================================');
        console.log($scope.products);
        console.log('====================================');
    })
}
$scope.getProducts();

})