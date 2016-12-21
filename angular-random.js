/* global angular */
angular.module('random')
.factory('random', [function() {
    'use strict';

    var self = this;

    self.Random = function Random(min, max){
        min = min === null? MIN_INT : min;
        max = max === null? MAX_INT : max;
        return min + (max - min) * Math.rand();
    };

    return self.Random;
}]);
