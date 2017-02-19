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
            .state('team-select', {
                url: '/',
                templateUrl: "../views/team-select/team-select.html"
            })
            .state('roster', {
                url: '/roster',
                templateUrl: '../views/roster/roster.html',
                controller: "rosterCtrl"
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
