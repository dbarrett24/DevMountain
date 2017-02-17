var StattleshipAPI = require('node-stattleship');
 
var stattleship = new StattleshipAPI('46dbbda6eb33623048fb17208f8bea1c');
 
var params = {
//   team_id: "mlb-bos"
    per_page: 40
};

exports.getPlayers = function(){
   return stattleship.players('basketball', 'nba', "playerSeasonStats", params)
   .then(function(players) {
        return players;
    });
}
