'use strict';

angular.module('pinspirationApp')
  .controller('UserHomeCtrl', function ($scope,ngDialog,$http,Auth) {
    $scope.message = 'Hello';
    $scope.upload = function(){
        ngDialog.open({
          template:'components/modal.html',

        });
    }
   $scope.addPin = function(event){
     event.preventDefault();
     var pinTit;
     var pinLin;
     var useId = Auth.getCurrentUser()._id;
     $http.put('/api/users/addPin', {
       id:useId,
       pinTitle:,
       pinLink:
     })
   }
  });
