angular.module('app').service('rosterService', function($http){
    // ************************************
    var players = [
        {
            name: 'Blake Griffin',
            id: 1,
            image: 'http://thesource.com/wp-content/uploads/2016/02/la-sp-cn-blake-griffin-reveals-what-inspired-him-to-become-avid-reader-20151118.jpg'
        },
        {
            name: 'Chris Paul',
            id: 2,
            image: 'http://images.performgroup.com/di/library/sporting_news/5b/59/chris-paul-getty-ftr-010516_ifl1w3gzvaps1jgwobqsazzyu.jpg?t=321171290'
        },
        {
            name: 'Deandre Jordan',
            id: 3,
            image: 'http://sports.cbsimg.net/images/visual/whatshot/103015_DeAndre.jpg'
        }
    ]

  this.getPlayers = function(){
      return players;
  }

  this.findPlayerById = function(id){
    var match;

    for(var i = 0; i < players.length; i++){
        if(players[i].id == id) {
            match = players[i];
        }
    }
    return match;
  }
    // ************************************
});