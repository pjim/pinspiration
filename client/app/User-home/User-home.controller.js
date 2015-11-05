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

        function getUserPinsFromServer(){
          $http.get('/api/posts/allPosts/' + Auth.getCurrentUser().name).success(function(res){
             $scope.pins = res;
         });
        }

        getUserPinsFromServer();

        $scope.addPin = function (event) {
            //event.preventDefault();
            var pinTit = $scope.pin.pinName;
            var pinLin  = $scope.pin.pinLink;
            var useId = Auth.getCurrentUser()._id;
            $http.post('/api/users/addPin', {

                id: useId,
                pinTitle: pinTit,
                pinLink: pinLin
            });
            getUserPinsFromServer();
        };

        function findPinId(name){
              var result = $scope.pins.filter(function(val){
                if(val.title.toLowerCase() === name.toLowerCase()){return true;}
                else {return false;}
              });

              return result[0]._id;
        }



        $scope.deletePin = function(event){
          event.preventDefault();
          var pinName = $scope.deletepin.name;
          var pinId = findPinId(pinName);
          //var pinId = $scope.pin
          $http.delete('/api/users/' + Auth.getCurrentUser()._id + '/' + pinId + '/deletePin');
          getUserPinsFromServer();

        };


  });
