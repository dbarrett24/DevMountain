angular.module("app", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/list.html'
            })
        
        $urlRouterProvider
            .otherwise('/');
    });