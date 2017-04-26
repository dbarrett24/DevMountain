angular.module('assessment').controller('productDetailsCtrl', function($scope, shopService, $stateParams){

 var Url = $stateParams.id;
 console.log($stateParams)
  $scope.getItemDetails = function(id){
        shopService.getItemDetails(id).then(function(response){
            $scope.details = response;
            console.log($scope.details)

        })
    }
    $scope.getItemDetails(Url);

})