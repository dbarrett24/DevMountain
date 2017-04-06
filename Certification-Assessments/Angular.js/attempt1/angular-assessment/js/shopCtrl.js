angular.module('assessment').controller('shopCtrl', function($scope, shopService, $stateParams){

    $scope.test = shopService.test;

    $scope.getItems = function(){
        shopService.getItems().then(function(items){
            $scope.items = items;
            console.log('All products', $scope.items)
        })
    }
    $scope.getItems();

 var Url = $stateParams.id;
 console.log($stateParams.id)

  $scope.getItemDetails = function(id){
        shopService.getItemDetails(id).then(function(response){
            $scope.details = response;
            console.log($scope.details)

            for(var i = 0; i < $scope.details.length; i++){
                if($scope.details[i].id == $stateParams.id){
                    // $scope.details[i]
                }
            }
        })
    }
    $scope.getItemDetails(Url);

    $scope.toggle = true;
})