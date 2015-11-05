'use strict';

angular.module('pinspirationApp')
  .controller('RecentInspirationsCtrl', function ($scope,$http) {
    $scope.pins = $http.get('/api/posts/').success(function(ret){
      console.log(ret);
      $scope.pins = ret;

    });
  });
