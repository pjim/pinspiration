'use strict';

angular.module('pinspirationApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title':'My Image Home',
      'link':'/User-home',
      'show':'isLoggedIn()'
    },
    {
      'title':'Recent Inspirations',
      'link':'/Recent-inspirations',
      'show':'true'
    }
   ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
