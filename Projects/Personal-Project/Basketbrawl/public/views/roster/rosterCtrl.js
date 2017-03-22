angular.module("brawlApp").controller("rosterCtrl", function($scope, mainService, $stateParams){
    // $scope.test1 = "RosterCTRL WORKING";
    console.log("rosterCtrl");
    
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
    
        mainService.getTeams()
            .then(function(teamData){
                $scope.teamData = teamData;
                console.log($scope.teams);

                var team = teamData.find(function(team){
                    return team.slug === $stateParams.teamId;
                });

                if(team) {
                    $scope.teamSlug = team.slug;
                    $scope.getRosters(team.slug);
                } else {
                    return 'nba-ny';
                }

                return team.slug;
            })
            .then(mainService.getRosters)
            .then(function(teamRoster){
               $scope.players = teamRoster.players;
            })

$scope.test = function(){
    mainService.dbGetTeams().then(function(response){
        console.log(response);
        $scope.testData = response[0];
    })
}


});