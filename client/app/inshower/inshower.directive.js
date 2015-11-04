'use strict';

angular.module('pinspirationApp')
  .directive('inshower', function () {
    return {
      templateUrl: 'app/inshower/inshower.html',
      restrict: 'EA',
      scope:{
        inpArr:'='

      },
      link: function (scope, element, attrs) {
      }
    };
  });
