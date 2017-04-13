angular.module('swapi', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './home/home.html',
    controller: 'homeCtrl'
  })
  .state('display', {
    url: '/display',
    templateUrl: './display/display.html',
    controller: 'displayCtrl'
  })
  .state('details', {
    url: '/details/:planetname',
    templateUrl: './details/details.html',
    controller: 'detailsCtrl'
  })



})
