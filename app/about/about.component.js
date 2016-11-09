'use strict';
angular.
  module('about').
  component('about', {
    templateUrl: 'about/about.template.html',
    controller: ['$scope','$http',
     function AboutController($scope, $http) {}
    ]
  });
