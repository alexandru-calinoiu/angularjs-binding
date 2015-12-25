'use strict';

angular.module('thinkAngular.viewServices', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view_services', {
      templateUrl: 'view_services/view_services.html'
    })
  }])
  .factory('messages', function () {
    var messages = {};

    messages.list = [];
    messages.add = function (message) {
      messages.list.push({id: messages.list.length, text: message});
    };

    return messages;
  })
  .controller('ListController', ['messages', function (messages) {
    var self = this;

    self.messages = messages.list;
  }])
  .controller('PostController', ['messages', function (messages) {
    var self = this;

    self.message = '';

    self.addMessage = function () {
      messages.add(self.message);
      self.message = '';
    };
  }]);
