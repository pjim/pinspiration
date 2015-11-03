'use strict';

angular.module('pinspirationApp')
  .controller('UserHomeCtrl', function ($scope,ngDialog) {
    $scope.message = 'Hello';
    $scope.upload = function(){
        ngDialog.open({template:'popupTmpl.html'});
    }

  });
