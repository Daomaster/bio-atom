(function() {
  'use strict';

  angular
    .module('temp')
    .directive('footer', footer);

  /** @ngInject */
  function footer() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      controller: 'FooterController',
      bindToController: true
    };

    return directive;
  }

})();
