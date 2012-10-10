"use strict";
define(['app'], function(app) {
  return app.controller('NavBarController', [
    '$scope', '$location',
    function ($scope, $location) {
      if ( $location.path() === '' ) {$location.path('/');}
      $scope.location = $location;
    }
  ]);
});
