'use strict';

/**
 * @ngdoc function
 * @name testYomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testYomanApp
 */
angular.module('testYomanApp')
  .controller('MainCtrl', function ($scope,localStorageService) {

    var todoInCache = localStorageService.get('todos');
    $scope.todos = todoInCache && todoInCache.split('/n')||[];
    $scope.$watch('todos',function(){
      localStorageService.add('todos',$scope.todos.join('/n'));
    },true);

    $scope.addTodo = function(){
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function(index){
      console.log('it works'+index);
      $scope.todos.splice(index,1);
    };

  });
