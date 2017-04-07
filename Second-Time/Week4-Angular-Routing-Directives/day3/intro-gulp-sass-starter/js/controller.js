angular.module("app").controller("ctrl", function($scope, service){
   
    $scope.thisappisbroken = "This app is working";

    $scope.germData = service.getGerms();

    $scope.saySomething = () => {
        let who = 'you';
        return `I'm giving up on...
                ${who}`
    }


    
});