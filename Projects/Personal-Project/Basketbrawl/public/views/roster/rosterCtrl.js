angular.module("brawlApp").controller("rosterCtrl", function($scope, mainService, $stateParams){
    // $scope.test1 = "RosterCTRL WORKING";
    // console.log("rosterCtrl");
    
    var leftPlayer = [];
    var rightPlayer = [];
    

    //gets player information: names, stats, based on team-url
    var url = $stateParams.teamId;
    
    
    $scope.getTeamInfo = function(url){
        mainService.getDbData(url).then(function(response){
            console.log("Player Stats of Selected Team", response);
            $scope.selectedTeam = response;
            // return response;
            
        });
    }
    var player = $scope.getTeamInfo(url);
    // ---------------------------------------


//Returns correct URL ending for what is team is selected.
    mainService.getTeams()
        .then(function(teamData){
            $scope.teamData = teamData;
            // console.log("teamJSON", $scope.teamData);
            var team = teamData.find(function(team){
                return team.name === $stateParams.teamId;
            });
            
            if(team) {
                $scope.teamSlug = team.name;
                $scope.logo = team.logo;
            } else {
                return 'Atlanta Hawks';
            }
            return team.name;
    });
   
//On click, display player image.

    $scope.addPlayerLeft = function(player){
        if(player.hasOwnProperty("headimg")){
            return player[1].headImg;
        }};
    
    

    // $scope.addPlayerRight = function(){
        
    //     return playerData;
    // }
    


});