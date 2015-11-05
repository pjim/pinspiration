'use strict';

angular.module('pinspirationApp')
  .controller('RecentInspirationsCtrl', function ($scope,$http) {
    $scope.pins = $http.get('/api/users/showPins').success(function(ret){
      console.log(ret);
      $scope.pins = ret;

    });
  });
