angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html",
                controller: 'homeCtrl'
            })
            .state('adventurers',{
                url:'/adventurers',
                parent:'home',
                templateUrl: "../views/about-adventurers.html"
            })
            .state('contact',{
                url:'/contact',
                parent:'home',
                templateUrl: "../views/contact.html",
                controller: 'contactCtrl'
            })
            .state('packages',{
                url:'/packages',
                templateUrl: "../views/packages.html",
                controller: "packagesCtrl",
                controllerAs: 'vm'
            })
            .state('booked',{
                url:'/booked/:id',
                templateUrl: "../views/booked.html",

                controllerAs: 'vm'
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: 'locationsCtrl',
                controllerAs: 'vm'
            });

        $urlRouterProvider
            .otherwise('/');
    });

angular.module('devmtnTravel')
.directive('adventurerCard', function() {
  return {
    restrict: 'A',
    templateUrl: '../views/adventureCard.html',
    scope: {
      img: '@',
      title: '@',
      summary: '@'
    }
  }
})

angular.module('devmtnTravel')
.controller('contactCtrl', function($scope) {
  
})

angular.module('devmtnTravel')
.controller('homeCtrl', function($scope) {
  
})

angular.module('devmtnTravel')
.controller("locationsCtrl", function($scope, mainSrv) {
  this.locations = mainSrv.travelInfo;
})

angular.module('devmtnTravel')
.controller('packagesCtrl', function($scope, mainSrv) {
    $scope.packages = mainSrv.travelInfo;

    $scope.lowestPrice = (function() {
      var lowest = $scope.packages.reduce(function(a,b) {
        return a.price < b.price ? a.price : b.price
      })
      // lowest = lowest.toString().replace(/(\d{3})+(?!\d)/, ',')
      return lowest;
    })();
})

angular.module('devmtnTravel').service('mainSrv', function(){

    this.travelInfo = [{
        city: 'New York',
        country: 'United States',
        image: "../img/NewYork.jpg",
        desc: 'Home to the Empire State Building, Times Square, Statue of Liberty and other iconic sites, New York City is a fast-paced, globally influential center of art, culture, fashion and finance',
        id: 112233,
        price: 1345

    }, {
        city: 'Paris',
        country: 'France',
        image: "../img/Paris.jpg",
        desc: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its picturesque 19th-century cityscape is crisscrossed by wide boulevards and the River Sein",
        id: 1122343,
        price: 909
    },{
        city: 'Sydney',
        country: 'Australia',
        image: "../img/Sydney.jpg",
        desc: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Opera House, with a distinctive sail-like design. Massive Darling Harbour and Circular Qua",
        id: 11223489,
        price: 1112


    }]
})
