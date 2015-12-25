'use strict';

angular.module('thinkAngular.version', [
  'thinkAngular.version.interpolate-filter',
  'thinkAngular.version.version-directive'
])

.value('version', '0.1');
