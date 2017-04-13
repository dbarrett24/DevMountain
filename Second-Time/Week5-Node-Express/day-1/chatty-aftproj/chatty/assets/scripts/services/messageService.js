'use strict';

angular.module('chattyApp')
  .service('messageService', function ( $http ) {
    
      this.getMessages = function () {
        return $http.get('/messages'); 
      }

      this.addMessage = function (userName, message ) {
        return $http.post('/messages', { message: message, userName: userName});
      }
    
  });
