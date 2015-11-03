'use strict';

angular.module('pinspirationApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Recent-inspirations', {
        templateUrl: 'app/Recent-inspirations/Recent-inspirations.html',
        controller: 'RecentInspirationsCtrl'
      });
  });
