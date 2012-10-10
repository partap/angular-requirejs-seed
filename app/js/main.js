require.config({
  paths: {
    jquery: '../lib/jquery/jquery-1.8.2.min',
    bootstrap: '../lib/bootstrap/js/bootstrap',
    underscore: '../lib/underscore/underscore',
    angular: '../lib/angular/angular',
    angularResource: '../lib/angular/angular-resource',
    text: '../lib/require/text'
  }, 
  shim: {
    'angular' : {
      'exports' : 'angular'
    }
  },
  priority: [
    "angular"
  ], 
  urlArgs: 'v=1.1'
});

require( [
  "jquery",
  "angular",
  "app"
], function($, angular, app) {
  //This function will be called when all the dependencies
  //listed above are loaded. Note that this function could
  //be called before the page is loaded.
  //This callback is optional.
  //console.log('angular and app should be loaded now');
  //$(function () {
  angular.element(document).ready(function () {
    //console.log('bootstrapping angular');
    angular.bootstrap(document, ['myApp']);
  });
});
