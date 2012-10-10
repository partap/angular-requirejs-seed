'use strict';

/* Directives */

define([ 'app', 'jquery'], function (app, $) {
  app.directive('appVersion', ['version', function factory (version) {
    return function (scope, elm, attrs) {
      elm.text(version);
    };
  }]);

  app.directive('navbar', function () {
    return {
      restrict: 'C',
      compile: function (tElement, tAttrs, transclude) {
        return {
          post: function postlink(scope, iElement, iAttrs, controller){
            scope.$watch('location.path()', function(path) {
              $('ul li', iElement).removeClass('active');
              $('ul li a[href^="#' + path + '"]', iElement).closest('li').addClass('active');
            });
          }
        }
      }
    };
  });

  return app;
});
