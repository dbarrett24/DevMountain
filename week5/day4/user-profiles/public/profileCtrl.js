angular.module('userProfiles')
.controller('profileCtrl', function( $scope , userInfo) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
	$scope.currentUser = userInfo.currentUser;
	$scope.friends = userInfo.friends;
});