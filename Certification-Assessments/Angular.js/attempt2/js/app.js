angular.module('assessment', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '../views/home.html'
        
    })

})