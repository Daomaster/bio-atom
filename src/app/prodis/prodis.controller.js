(function() {
  'use strict';

  angular
    .module('temp')
    .controller('ProDisController', ProDisController);

  /** @ngInject */
  function ProDisController($scope) {
    $scope.dumData = [];
    var generate = function(num) {
      for (var i = 0; i < num; i++) {
        $scope.dumData.push(i);
      }
    }

    generate(30);
  }
})();
