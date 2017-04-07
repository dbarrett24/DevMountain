angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../views/home.html'
            })
            .state('marketplace', {
                url: '/marketplace',
                templateUrl: '../views/marketplace.html'
            })

            $urlRouterProvider.otherwise('/');
    });