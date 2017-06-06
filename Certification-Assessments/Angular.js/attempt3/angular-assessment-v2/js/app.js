angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../views/home.html',
            controller: 'mainCtrl'
        })
        .state('pets', {
            url: '/pets',
            templateUrl: '../views/pets.html',
            controller: 'mainCtrl'
        })
        .state('pet', {
            url: '/pets/:id',
            templateUrl: '../views/pets.html',
            controller: 'mainCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '../views/about.html',
            controller: 'mainCtrl'
        })
        .state('blog', {
            url: '/blog',
            templateUrl: '../views/blog.html',
            controller: 'mainCtrl'
        })
        $urlRouterProvider.otherwise('/');
})