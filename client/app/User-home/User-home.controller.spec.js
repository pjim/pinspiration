'use strict';

describe('Controller: UserHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('pinspirationApp'));

  var UserHomeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserHomeCtrl = $controller('UserHomeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
