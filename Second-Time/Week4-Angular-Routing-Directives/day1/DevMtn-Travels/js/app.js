angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('adventurers',{
                url: '/adventurers',
                // parent: "/home",
                templateUrl: '../views/about-adventurers.html'
            })
            .state('contact',{
                url: '/contact',
                //parent is breaking the routes for some reason
                // parent: "/home",
                templateUrl: '../views/contact.html'
            })
            .state('packages',{
                url: '/packages',
                templateUrl: '../views/packages.html',
                controller: 'packagesCtrl'
            })
            .state('booked', {
                url: '/booked/:id',
                templateUrl: '../views/booked.html',
                controller: 'bookedCtrl'
            })
            .state('locations',{
                url: '/locations',
                templateUrl: '../views/locations.html',
                controller: 'locationsCtrl'
            })

        $urlRouterProvider
            .otherwise('/');
    });
