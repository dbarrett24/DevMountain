angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainService, $stateParams){
    $scope.test = "Booked Ctrl";

    $scope.travelInfo = mainService.travelInfo;

    $scope.chosenPackage = mainService.travelInfo
    console.log($stateParams);


    for(var i = 0; i < mainService.travelInfo.length; i++){
        if(mainService.travelInfo[i].id == $stateParams.id){
            
            //this changes the background
            $scope.background = {
            "background-image": "url(" + mainService.travelInfo[i].image +")",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
            };
        
            //this puts the selected City's name on $scope
            $scope.bookedLocation = mainService.travelInfo[i];
            // $scope.city = mainService.travelInfo[i].city;
        }
    }

    console.log($scope.bookedLocation)
});