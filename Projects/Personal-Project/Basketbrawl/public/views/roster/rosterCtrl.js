angular.module("brawlApp").controller("rosterCtrl", function($scope, $timeout, mainService, $stateParams){
    // $scope.test1 = "RosterCTRL WORKING";
    // console.log("rosterCtrl");
    
    $scope.leftPlayer = {};
    // $scope.leftPlayer = $scope.$parent.share.leftPlayer;
    $scope.rightPlayer = [];

    mainService.getDbData(url).then(function(response){
        // console.log("Player Stats of Selected Team", response);
        $scope.currentTeamData = response;
        // return response;
    });

    $scope.addPlayerLeft = function(player) {
        // for (var i = 0; i < leftPlayer.length; i++) {
        //     if (leftPlayer[i] === player) 
        // }
        // if ($scope.leftPlayer)
        $scope.leftPlayer = player;
        console.log($scope.leftPlayer);
        // $scope.$parent.share.leftPlayer = player;
        // $timeout($scope.$parent.$apply.bind($scope.$parent), 0);
        // $timeout($scope.$apply.bind($scope), 0);
    }

// *********************************************************
    //gets player information: names, stats, based on team-url
    var url = $stateParams.teamId;
    
    
    $scope.getTeamInfo = function(url){
        mainService.getDbData(url).then(function(response){
            // console.log("Player Stats of Selected Team", response);
            $scope.selectedTeam = response;
            // return response;
            
        });
    }
    $scope.getTeamInfo(url);
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

    // $scope.addPlayerRight = function(){
        
    //     return playerData;
    // }
    


});