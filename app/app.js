'use strict';

// Declare app level module which depends on views, and components
angular.module('thinkAngular', [
  'ngRoute',
  'thinkAngular.viewBinding',
  'thinkAngular.viewControllers',
  'thinkAngular.version'
]).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view_controllers'})
}]);
