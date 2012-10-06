require.config({
  paths: {
    jquery: 'libs/jquery/jquery-1.7.2.min'
  ,order: 'libs/require/order-1.0.5'
  , bootstrap: 'libs/bootstrap/bootstrap'
  , underscore: 'libs/underscore/underscore'
  , angular: 'lib/angular/angular-module'
  , angularResource: 'libs/angular/angular-resource'
  }
, priority: [
  "angular"
]
, urlArgs: 'v=1.0'
});
require( [
  "angular", "app"
], function( angular, core) {
  //This function will be called when all the dependencies
  //listed above are loaded. Note that this function could
  //be called before the page is loaded.
  //This callback is optional.


});
