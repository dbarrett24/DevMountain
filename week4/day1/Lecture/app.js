angular.module("myApp", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when("", "/")
    $urlRouterProvider.otherwise("/404")
    
    $stateProvider
        .state("home", {
            templateUrl: "./home/home.html",
            url: "/",
            controller: "homeCtrl"
        })
        .state("roster", {
            templateUrl: "./roster/roster.html",
            url: "/roster",
            controller: "rosterCtrl"
        })
        .state("player", {
            templateUrl: "./player/player.html",
            url: "/player/:id/",
            controller: "playerCtrl"
        })
        .state("404", {
            templateUrl: "Nothing to see here",
            url: "/404"
        })
});

