'use strict';

angular.module('thinkAngular.viewBinding', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view_binding', {
      templateUrl: 'view_binding/view_binding.html'
    })
  }]);
