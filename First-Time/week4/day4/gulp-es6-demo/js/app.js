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
