angular.module("brawlApp").service("mainService", function($http){
    // *********************************** 
    //                TEST
    this.test1 = "Service is working";
    // *********************************** 

    this.getPlayers = function(){
        return $http ({
            method: 'GET',
            url:"https://api.stattleship.com/basketball/nba/players",
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Token token=46dbbda6eb33623048fb17208f8bea1c',
                'Accept': 'application/vnd.stattleship.com; version=1'
            }
        }).then(function(response){
            // console.log(response.data)
            return response.data;
        })
    }

   this.getPlayersStats = function(){
        return $http ({
            method: 'GET',
            url:"https://api.stattleship.com/basketball/nba/player_season_stats",
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Token token=46dbbda6eb33623048fb17208f8bea1c',
                'Accept': 'application/vnd.stattleship.com; version=1'
            }
        }).then(function(response){
            // console.log(response.data)
            return response.data;
        })
    }

    this.getRosters = function(teamSlug){
        return $http ({
            method: 'GET',
            url:"https://api.stattleship.com/basketball/nba/rosters/?team_id=nba-ny", /*+ teamSlug + "/",*/
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Token token=46dbbda6eb33623048fb17208f8bea1c',
                'Accept': 'application/vnd.stattleship.com; version=1'
            }
        }).then(function(response){
            console.log(response.data)
            return response.data;
        })
    }

    // this.getTeamSeasonStats = function(){
    //     return $http ({
    //         method: 'GET',
    //         url:"https://api.stattleship.com/basketball/nba/team_season_stats",
    //         headers: {
    //             'Content-Type' : 'application/json',
    //             'Authorization' : 'Token token=46dbbda6eb33623048fb17208f8bea1c',
    //             'Accept': 'application/vnd.stattleship.com; version=1'
    //         }
    //     }).then(function(response){
    //         console.log(response.data)
    //         return response.data
    //     })
    // }

    // this.getTeams = function(){
    //     return $http ({
    //         method: 'GET',
    //         url:"https://api.stattleship.com/basketball/nba/teams",
    //         headers: {
    //             'Content-Type' : 'application/json',
    //             'Authorization' : 'Token token=46dbbda6eb33623048fb17208f8bea1c',
    //             'Accept': 'application/vnd.stattleship.com; version=1'
    //         }
    //     }).then(function(response){
    //         // console.log(response.data)
    //         return response.data
    //     })
    // }
    this.getTeams = function(){
        return $http ({
            method: 'GET',
            url:"../JSON/teams.json",
        }).then(function(response){
            console.log(response.data)
            return response.data
        })
    }



});