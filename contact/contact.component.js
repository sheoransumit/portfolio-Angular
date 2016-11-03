'use strict';
angular.
  module('contact').
  component('contact', {
    templateUrl: 'contact/contact.template.html',
    controller: ['$scope','$http',
     function ExampleController($scope, $http) {
      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
         $http.post('http://localhost:8080/api', $scope.master)
            .success(function (data, status, headers, config) {
            })
            .error(function (data, status, header, config) {
            });
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    }
    ]
  });
