'use strict';

/* Directives */

define([ 'angular'], function (angular) {

    return angular.module('myApp.directives', []).
        directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]);

});
