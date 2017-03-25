angular.module("brawlApp").controller("mainCtrl", function($scope, mainService){
// ***********************************   
//                TEST 
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;
// ***********************************  
    
    console.log("mainCtrl");
 
        // mainService.getPlayers().then(function(players){
        //     $scope.players = players.players;
        //     // console.log($scope.players);
        // });
  

        // mainService.getTeams().then(function(teams){
        //     $scope.teams = teams;
        //     // console.log($scope.teams)
        //     $scope.teamSlug = $scope.teams.slug;
        // });
   
//     function init (){
//         function getData(){
//             mainService.getPlayerStats().then(function(playerStats){
//                 var arron = playerStats.player_season_stats;

//                 mainService.getRosters().then(function(rosters){
//                     var rosters = rosters.players;
//                     console.log("arron afflalo", arron);
//                     console.log(rosters);
                    
//                     for(var i = 0; i < playerStats.length; i++){
//                         if(playerStats[i].player_id === rosters[0].id){
//                             console.log("found it");
//                         }
//                         else{
//                             console.log("not found");
//                         }
//                     }
                    
//                 });
//             });
//         }
//         getData();
//     }
//    init();
   
        // mainService.getPlayerStats().then(function(playerStats){
        //     $scope.playerStats = playerStats.player_season_stats;
        // });

        
        // mainService.getRosters().then(function(rosters){
        // $scope.rosters = rosters.players;
       
        // });
   
        
        // console.log("player", $scope.playerStats);
        // console.log("roster", $scope.rosters);


        //*************DataBase************ */
        
    

});

