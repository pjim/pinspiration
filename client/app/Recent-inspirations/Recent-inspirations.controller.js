'use strict';

angular.module('pinspirationApp')
  .controller('RecentInspirationsCtrl', function ($scope,$http,$timeout) {
    $scope.pins = $timeout($http.get('/api/posts/').success(function(ret){
      $scope.pins = ret;

    }),2000);
  });
