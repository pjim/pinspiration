'use strict';

angular.module('pinspirationApp')
  .directive('inshower', function () {
    return {
      templateUrl: 'app/inshower/inshower.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });