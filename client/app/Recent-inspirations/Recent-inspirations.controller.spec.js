'use strict';

describe('Controller: RecentInspirationsCtrl', function () {

  // load the controller's module
  beforeEach(module('pinspirationApp'));

  var RecentInspirationsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecentInspirationsCtrl = $controller('RecentInspirationsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
