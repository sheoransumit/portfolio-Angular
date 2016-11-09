'use strict';

angular.
  module('core.tech').
  factory('Tech', ['$resource',
    function($resource) {
      return $resource('tech-list/:techfile.json', {}, {
        query: {
          method: 'GET',
          params: {techfile: 'tech'},
          isArray: true
        }
      });
    }
  ]);