'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<home></home>'
        }).
        when('/about', {
          template: '<about></about>'
        }).
        when('/techstack', {
          template: '<tech-stack></tech-stack>'
        }).
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/contact', {
          template: '<contact></contact>'
        }).
        otherwise('/home');
    }
  ]);
