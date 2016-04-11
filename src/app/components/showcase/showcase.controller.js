(function() {
  'use strict';

  angular
    .module('temp')
    .controller('ShowCaseController', ShowCaseController);

  /** @ngInject */
  function ShowCaseController($scope) {
    $scope.title = "最新产品";
    if ($scope.contentType == 'news') {
        $scope.title = "公司动态";
    }
  }
})();
