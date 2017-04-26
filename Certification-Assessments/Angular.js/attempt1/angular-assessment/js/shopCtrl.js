angular.module('assessment').controller('shopCtrl', function($scope, shopService, $stateParams){

    $scope.test = shopService.test;

    $scope.getItems = function(){
        shopService.getItems().then(function(items){
            $scope.items = items;
            console.log('All products', $scope.items)
        })
    }
    $scope.getItems();


    $scope.toggle = true;
})