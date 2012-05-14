'use strict';
define([ 'angular', 'service/services', 'controller/controllers','filter/filters', 'directive/directives'], function (angular, service, controller, filter, directive) {

    return angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
        config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {template: 'partials/partial1.html', controller: controller.MyCtrl1});
        $routeProvider.when('/view2', {template: 'partials/partial2.html', controller: controller.MyCtrl2});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
});
