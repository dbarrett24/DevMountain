angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
                // controller: 'homeCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: './views/signup.html',
                // controller: 'signupCtrl'
            })
            .state('details', {
                url: '/details',
                templateUrl: './views/details.html',
                // controller: 'detailsCtrl'
            })
        
        $urlRouterProvider.otherwise('/');
    })