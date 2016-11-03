'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        // this.phones = this.phones.slice(0,5);
        console.log(this.phones);
        this.orderProp = 'age';
      }
    ]
  });