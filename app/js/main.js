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
    'angular' : {'exports' : 'angular'},
    'angular-resource' : {deps:['angular']},
    'bootstrap': {deps:['jquery']},
    'underscore': {exports: '_'}
  },
  priority: [
    "angular"
  ],
  urlArgs: 'v=1.1'
});

require( [
  'angular',
  'app',
  'services/services',
  'controllers/controllers',
  'controllers/navbar',
  'filters/filters',
  'directives/directives',
  'routes'
], function(angular, app) {
  //This function will be called when all the dependencies
  //listed above are loaded. Note that this function could
  //be called before the page is loaded.
  //This callback is optional.

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
  });
});
