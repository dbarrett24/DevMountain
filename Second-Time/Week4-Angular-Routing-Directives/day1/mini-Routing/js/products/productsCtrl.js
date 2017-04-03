angular.module('app').controller('productsCtrl', function($scope, productsService, $stateParams){
   if($stateParams.id === 'shoes'){
       $scope.productData = productsService.shoeData;
   }
   else if($stateParams.id === 'socks'){
       $scope.productData = productsService.sockData;
   }

   console.log($stateParams);
});