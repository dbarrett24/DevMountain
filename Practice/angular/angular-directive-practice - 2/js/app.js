angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../views/home.html'
            })
            .state('about', {
                url: '/',
                templateUrl: '../views/about.html'
            })
            .state('dashboard', {
                url: '/',
                templateUrl: '../views/dashboard.html'
            })

            $urlRouterProvider.otherwise('/');
    });

