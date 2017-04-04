angular.module('movies', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/views/home.html',
                controller: '/homeCtrl'
            })
            .state('details', {
                url: '/details/:movieId',
                templateUrl: '/views/details.html',
                controller: '/detailsCtrl'
            })
        
        $urlRouterProvider.otherwise('/');
    });