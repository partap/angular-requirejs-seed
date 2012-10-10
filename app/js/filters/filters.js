'use strict';

/* Filters */
define(['app'], function (app) {
  return app.filter('interpolate', ['version', function (version){
    return function (text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
});
