'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../views/home.html'
    }).state('marketplace', {
        url: '/marketplace',
        templateUrl: '../views/marketplace.html'
    });

    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainService) {

    // *****************************
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;
    // *****************************

});
'use strict';

angular.module('app').service('mainService', function ($http) {

    // *****************************
    this.test1 = "Service is working";
    // *****************************
});
'use strict';

angular.module('app').directive('navDir', function () {
    return {
        restrict: 'E',
        templateUrl: '../views/directives/navDir.html'
    };
});
//# sourceMappingURL=bundle.js.map
