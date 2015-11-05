'use strict';

angular.module('pinspirationApp')
  .controller('MainCtrl', function ($scope,$timeout, $http) {
    $scope.pins = $timeout($http.get('api/posts').success(function(resp){
      $scope.pins = resp;
    }),2000);

  });
