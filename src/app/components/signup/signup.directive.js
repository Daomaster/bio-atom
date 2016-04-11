(function() {
  'use strict';

  angular
    .module('temp')
    .directive('signup', signup);

  /** @ngInject */
  function signup() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/signup/signup.html',
      controller: 'SignUpController',
      bindToController: true
    };

    return directive;
  }

})();
