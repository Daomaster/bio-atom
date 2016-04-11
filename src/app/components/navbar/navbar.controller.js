(function() {
  'use strict';

  angular
    .module('temp')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController($scope) {
    $scope.products = [
      {
        title: "表观",
        link: "/"
      },
      {
        title: "免疫",
        link: "/"
      },
      {
        title: "神经",
        link: "/"
      },
      {
        title: "干细胞",
        link: "/"
      },
      {
        title: "多因子检测",
        link: "/"
      }
    ];

    $scope.services = [
      {
        title: "ELISA",
        link: "/"
      },
      {
        title: "WB",
        link: "/"
      },
      {
        title: "液相芯片",
        link: "/"
      },
      {
        title: "抗体芯片",
        link: "/"
      }
    ];

    $scope.infos = [
      {
        title: "公司简介",
        link: "/"
      },
      {
        title: "公司消息",
        link: "/"
      },
      {
        title: "招聘信息",
        link: "/"
      },
      {
        title: "信息咨询",
        link: "/"
      }
    ];

  }
})();
