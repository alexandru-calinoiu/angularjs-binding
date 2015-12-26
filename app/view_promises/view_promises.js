'use strict';

function getData($timeout, $q) {
  return function () {
    return $q(function (resolve) {
      $timeout(function () {
        resolve(Math.floor(Math.random() * 10));
      }, 2000);
    });
  }
}

angular.module('thinkAngular.viewPromises', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view_promises', {
      templateUrl: 'view_promises/view_promises.html',
      controller: 'PromisesController as promisesCtrl'
    })
  }])
  .factory('getData', getData)
  .controller('PromisesController', ['getData', function (getData) {
    var self = this;

    self.data = 'Loading ...';

    getData()
      .then(function (data) {
        self.data = data;
        return data * 2;
      }, function (error) {
        self.data = error;
      })
      .then(function (data) {
        self.chainData = data;
        return getData();
      })
      .then(function (data) {
        self.chainPromise = data;
      })
      .finally(function () {
        self.date = 'Finished at: ' + new Date();
      });
  }]);
