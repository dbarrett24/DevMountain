angular.module("brawlApp").controller("rosterCtrl", function($scope, mainService, $stateParams){
    // $scope.test1 = "RosterCTRL WORKING";
    // console.log("rosterCtrl");
    
    var leftPlayer = [];
    var rightPlayer = [];
    

    $scope.addLeft = function(){
        
    }
    $scope.addRight = function(){

    }


    var url = $stateParams.teamId;
    console.log(url);

    $scope.getTeamInfo = function(url){
        mainService.getDbData(url).then(function(response){
            console.log("look at me", response);
            $scope.selectedTeam = response;
        });
    }
    $scope.getTeamInfo(url);
    
// Functions
    // GET DATA
    // $scope.getRosters = function(teamSlug){
    //     mainService.getRosters(teamSlug).then(function(rosters){
    //         $scope.rosters = rosters;
    //         // console.log($scope.rosters);
    //     });
    // };
    
        mainService.getTeams()
            .then(function(teamData){
                $scope.teamData = teamData;
                console.log("teamJSON", $scope.teamData);

                var team = teamData.find(function(team){
                    return team.name === $stateParams.teamId;
                });

                if(team) {
                    $scope.teamSlug = team.name;

                } else {
                    return 'Atlanta Hawks';
                }

                return team.name;
            })


});