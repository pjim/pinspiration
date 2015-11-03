'use strict';

angular.module('pinspirationApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/User-home', {
        templateUrl: 'app/User-home/User-home.html',
        controller: 'UserHomeCtrl'
      });
  });
