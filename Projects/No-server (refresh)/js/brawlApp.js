angular.module("brawlApp", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider){
        // var mainState = {
        //     name: 'main',
        //     views: {
        //         header: 'headerComponent',
        //         header2: "header2",
        //         nav: 'navComponent',
        //         content: 'mainComponent',
        //     }
        // };
        
        $stateProvider
            .state('home', {
                url: '/',
                views:{
                    'home-header':{
                        templateUrl: "../views/home-header/home-header.html"
                    },
                    'team-choices':{
                        templateUrl: "../views/team-choices/team-choices.html",
                        controller: "team-choicesCtrl"
                    }
                }
            })
            .state('team-select', {
                url: '/team-select',
                views:{
                    'player-header':{
                        templateUrl: "../views/player-header/player-header.html",
                        controller: "player-headerCtrl"
                    },
                    'team-choices':{
                        templateUrl: "../views/team-choices/team-choices.html",
                        controller: "team-choicesCtrl"
                    }
                }
            })
            .state('team-roster', {
                url: '/team-roster/:team_id',
                views:{
                    'player-header':{
                        templateUrl: "../views/player-header/player-header.html",
                        controller: "player-headerCtrl"
                    },
                    'roster':{
                        templateUrl: "../views/roster/roster.html",
                        
                    }
                }
            })
            // .state('fight', {
            //     url: '/fight/:id',
            //     parent: 'roster',
            //     templateUrl: '../views/fight/fight.html'
            // })
            // .state('results', {
            //     url: '/results/:id',
            //     parent: "fight",
            //     templateUrl: '../views/results/results.html'
            // })

        $urlRouterProvider
            .otherwise('/');
    })
