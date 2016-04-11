(function() {
  'use strict';

  angular
    .module('temp')
    .directive('showCase', showCase);

  /** @ngInject */
  function showCase() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/showcase/showcase.html',
      scope: {
        contentType: "@"
      },
      controller: 'ShowCaseController'
    };

    return directive;
  }

})();
