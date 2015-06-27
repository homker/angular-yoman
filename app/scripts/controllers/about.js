'use strict';

/**
 * @ngdoc function
 * @name testYomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testYomanApp
 */
angular.module('testYomanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
