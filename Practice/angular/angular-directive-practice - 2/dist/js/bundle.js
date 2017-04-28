'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../views/home.html'
    }).state('about', {
        url: '/',
        templateUrl: '../views/about.html'
    }).state('dashboard', {
        url: '/',
        templateUrl: '../views/dashboard.html'
    });

    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainService) {
    // *****************************
    $scope.test = mainService.test;
    // *****************************
});
'use strict';

angular.module('app').directive('modalDir', function () {
    return {
        restrict: 'E',
        templateUrl: '../../views/directives/modal.html'
    };
});
'use strict';

angular.module('app').directive('navDir', function () {
    return {
        restrict: 'E',
        templateUrl: '../../views/directives/nav-dir.html'
    };
});
'use strict';

angular.module('app').service('mainService', function ($http) {
    // *****************************
    this.test = "Controller & Service are working";
    // *****************************
});
//# sourceMappingURL=bundle.js.map
