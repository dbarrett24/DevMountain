angular.module("app", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('Home', {
            url: '/',
            template: '<a ui-sref="About"><h1>{{message}}</h1></a>',
            controller: "mainCtrl"
        })
        .state('About', {
            url: '/about',
            template: '<a ui-sref="Home"><h1>{{name}}</h1></a>',
            controller: "aboutCtrl"
        })
        .state('Roster', {
            url: '/roster',
            templateUrl: '../roster.html',
            controller: "rosterCtrl"
        })
        .state('Player', {
            url: '/player/:id',
            templateUrl: '../player.html',
            controller: "playerCtrl"
        })

    $urlRouterProvider.when('', '/');
});