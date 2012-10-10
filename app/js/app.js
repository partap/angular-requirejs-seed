'use strict';
define([ 
  'angular', 
  'text!../partials/partial1.html', 
  'text!../partials/partial2.html',
  'service/services', 
  'controller/controllers',
  'filter/filters', 
  'directive/directives'
], function (angular, partial1, partial2, service, controller, filter, directive) {

  var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
      config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {template: partial1, controller: controller.MyCtrl1});
        $routeProvider.when('/view2', {template: partial2, controller: controller.MyCtrl2});
        $routeProvider.otherwise({redirectTo: '/view1'});
      }]);
  return myApp;
});
