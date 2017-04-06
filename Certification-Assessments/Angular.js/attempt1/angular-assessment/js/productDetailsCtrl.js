angular.module('assessment').controller('productDetailsCtrl', function($scope, shopService, $stateParams){

 var Url = $stateParams.id;
 console.log($stateParams)
  $scope.getItemDetails = function(id){
        shopService.getItemDetails(id).then(function(response){
            $scope.details = response;
            console.log($scope.details)

            for(var i = 0; i < $scope.details.length; i++){
                if($scope.details[i].id == $stateParams.id){
                }
            }
        })
    }
    $scope.getItemDetails(Url);

})