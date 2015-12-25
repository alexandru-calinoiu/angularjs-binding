'use strict';

angular.module('thinkAngular.viewControllers', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view_controllers', {
      templateUrl: 'view_controllers/view_controllers.html',
      controller: 'ViewControllersCtrl as ctrl'
    })
  }])
  .controller('ViewControllersCtrl', [function () {
    var self = this;

    self.message = 'Hello';
    self.newMessage = '';

    self.updateMessage = function () {
      self.message = self.newMessage;
      self.newMessage = '';
    }
  }]);
