angular.module('devmtnTravel')
.directive('adventurerCard', function() {
  return {
    restrict: 'A',
    templateUrl: '../views/adventureCard.html',
    scope: {
      img: '@',
      title: '@',
      summary: '@'
    }
  }
})
