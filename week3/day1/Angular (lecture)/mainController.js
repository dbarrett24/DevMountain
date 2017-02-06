angular.module("app").controller("mainCtrl", function($scope){
    $scope.test = "Heyllo DM19";
    $scope.updateTest = function(){
        $scope.test = $scope.test +  "!";
        
    }
        $scope.two = "start value";
        $scope.toppings = [
            "sauce",
            "cheese",
            "more cheese",
            "pineapple",
            "pepperoni",
            "anchovies"
        ];
        $scope.addTopping = function(){
            $scope.toppings.push($scope.newTopping);
            $scope.newTopping = "";
        }

        $scope.cars = [
            {make: "Ford", model: "Mustang", year: 201},
            {make: "Tesla", model: "Model S", year: 1990},
            {make: "BMW", model: "S-class", year: 1995},
            {make: "Toyota", model: "Corolla", year: 2146},
            {make: "Honda", model: "Civic", year: 1940}
        ];
        $scope.filterObj = {make: "Ford"};
        $scope.isAwesome = true;
});