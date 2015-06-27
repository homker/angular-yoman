'use strict';

/**
 * @ngdoc overview
 * @name testYomanApp
 * @description
 * # testYomanApp
 *
 * Main module of the application.
 */
angular
  .module('testYomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider',function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('homker-todo-');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
