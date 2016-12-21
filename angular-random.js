
/*!
 * angular-random.js v0.0.1 - A standalone AngularJS implementation to get a random number with a min and max value
 * Copyright (c) 2016 Sil van Diepen - http://github.com/silvandiepen/angular-random
 * License: MIT
*/

(function(window, angular, undefined) {
  angular.module('random', [])
     .service('random', [function () {
    function random(min, max){
        min = min === null? MIN_INT : min;
        max = max === null? MAX_INT : max;
        var number = min + (max - min) * Math.random();
        return Math.round(number);
    }
    return random;

	}]);
})(window, window.angular);
