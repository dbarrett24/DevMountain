angular.module("brawlApp").controller("rosterCtrl", function($scope, mainService, $stateParams){
    // $scope.test1 = "RosterCTRL WORKING";
    
    
    var leftPlayer = [];
    var rightPlayer = [];
    

    $scope.addLeft = function(){
        
    }
    $scope.addRight = function(){

    }

// Functions
    // GET DATA
    $scope.getRosters = function(teamSlug){
        mainService.getRosters(teamSlug).then(function(rosters){
            $scope.rosters = rosters;
            console.log($scope.rosters);
        });
    };
    
    $scope.getTeams = function(){
        mainService.getTeams().then(function(teams){
            $scope.teams = teams;
            console.log($scope.teams);
        });
    };
    $scope.getTeams();
    var teams = $scope.teams;
    console.log($scope.teams);

// Invoked on Startup
    // GET DATA
    // Pass in teamSlug to retrieve specific team's roster data
    for(var i = 0; i < teams.length; i++){
        for(var prop in teams[i]){
            if($stateParams.team_id === teams[i][prop]){
                var teamSlug = teams[i].slug;
                $scope.teamSlug = teams[i].slug;
                $scope.getRosters(teamSlug);
            }
        }
    }
      

   


// Get roster of team id



});