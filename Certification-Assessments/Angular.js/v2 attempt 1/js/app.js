angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../views/home.html',
            
        })
        .state('about', {
            url: '/about',
            templateUrl: '../views/about.html',
            
        })
        .state('blog', {
            url: '/blog',
            templateUrl: '../views/blog.html',
            
        })
        .state('pets', {
            url: '/pets',
            templateUrl: '../views/pets.html',
            
        })
        .state('pet-bio', {
            url: '/pets/pet-bio/:id',
            templateUrl: '../views/pet-bio.html',
            
        })
        $urlRouterProvider.otherwise('/')
        
    });