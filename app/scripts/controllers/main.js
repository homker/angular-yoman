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

    var windowMask = (function() {
      var isIE6 = $.support.msie && $.support.version === '6.0',
          mask = '<div unselectable="on" class="mask"><div class="box">1</div></div>',
          alertNode = document.createElement('div');
      isIE6 && (mask = '<div unselectable="on" class="mask-ie6"><div class="mask-ie6-div"></div><iframe border="0" frameborder="0" allowtransparency="true" style=""></iframe></div>');
      mask = $(mask);
      $("body").append(mask);

      function show() {
        isIE6 && resize();
        mask.show();
      }

      function hide() {
        isIE6 && $(window).off("resize", calculateSize);
        mask.hide();
      }

      function calculateSize() {
        var b = document.documentElement.clientHeight ? document.documentElement : document.body,
          height = b.scrollHeight > b.clientHeight ? b.scrollHeight : b.clientHeight,
          width = b.scrollWidth > b.clientWidth ? b.scrollWidth : b.clientWidth;

        mask.css({height: height, width: width});
      }

      function resize() {
        calculateSize();
        $(window).on("resize", calculateSize);
      }

      return {
        show: show,
        hide: hide
      };
    })();


    var todoInCache = localStorageService.get('todos');
    $scope.todos = todoInCache && todoInCache.split('/n')||[];
    $scope.$watch('todos',function(){
      localStorageService.add('todos',$scope.todos.join('/n'));
    },true);

    $scope.addTodo = function(){
      windowMask.show();
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function(index){
      console.log('it works'+index);
      $scope.todos.splice(index,1);
    };

  });

