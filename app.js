(function () {
  'use strict';

  angular.module('myApp', [])

  .controller('MyCtrl', function ($scope) {
    $scope.name = "Eusebiu";
    $scope.sayHello = function () {
      return "Hello!";
    };
  });

})();
