(function() {
  'use strict';

  angular
    .module('temp')
    .directive('listView', listView);

  /** @ngInject */
  function listView() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/listview/listview.html',
      controller: 'ListController',
      bindToController: true
    };

    return directive;
  }

})();
