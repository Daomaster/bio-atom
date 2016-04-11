(function() {
  'use strict';

  angular
    .module('temp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/product', {
        templateUrl: 'app/prodis/prodis.html',
        controller: 'ProDisController',
        controllerAs: 'pro'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
