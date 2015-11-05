'use strict';

angular.module('pinspirationApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.pins = $http.get('api/posts').success(function(resp){
      $scope.pins = resp;
    });

  });
