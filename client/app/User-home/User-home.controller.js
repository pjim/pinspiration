'use strict';

angular.module('pinspirationApp')
  .controller('UserHomeCtrl', function ($scope, ngDialog, $http, Auth) {
    // $scope.upload = function(){
    //     ngDialog.open({
    //       template:'components/modal.html',
    //        scope: $scope
    //
    //     });
    // }
        $scope.click = function (){
            alert('clicked');
        };
        $scope.addPin = function (event) {
            event.preventDefault();
           console.log('event');
            var pinTit = $scope.pinName;
            var pinLin  = $scope.pinLink;
            var useId = Auth.getCurrentUser()._id;
            $http.post('/api/users/addPin', {

                id: useId,
                pinTitle: pinTit,
                pinLink: pinLink
            });
        }
  });
