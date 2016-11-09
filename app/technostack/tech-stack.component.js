'use strict';
angular.
  module('techStack').
  component('techStack', {
    templateUrl: 'technostack/tech-stack.template.html',
    controller: ['Tech',
      function TechStackController(Tech) {
        this.tech = Tech.query();
        }
    ]
  });
