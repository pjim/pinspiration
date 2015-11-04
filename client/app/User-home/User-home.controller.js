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
          console.log('sending');
             $http.get('api/users/' + Auth.getCurrentUser()._id + '/pins').success(function(resp){
                console.log(resp);
              });
        };

        $scope.addPin = function (event) {
            event.preventDefault();
           console.log('event');
            var pinTit = $scope.pin.pinName;
            var pinLin  = $scope.pin.pinLink;
            var useId = Auth.getCurrentUser()._id;
            $http.post('/api/users/addPin', {

                id: useId,
                pinTitle: pinTit,
                pinLink: pinLin
            });
        };

          $scope.pins = $http.get('/api/users/' + Auth.getCurrentUser()._id).success(function(){
          //  console.log(user.name);
        });
  });
