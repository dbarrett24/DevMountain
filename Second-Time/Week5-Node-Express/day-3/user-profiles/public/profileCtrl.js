angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
	$scope.getFriends = friendService.getFriends().then(function(friends){
		$scope.friends = friends.friends;
		$scope.currentUser = friends.currentUser;
		console.log(friends.friends);
		console.log(friends.currentUser);
	})
	
});