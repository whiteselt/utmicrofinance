'use strict';

// Declare app level module which depends on views, and components
angular.module('utmicrofinance', [
  'ngRoute'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/', {
      templateUrl: 'home.html' // ,
      // controller: 'HomeController'
    });
    $routeProvider.when('/about', {
      templateUrl: 'about.html'
    });
    $routeProvider.when('/donate', {
      templateUrl: 'donate.html'
    });
    $routeProvider.when('/contact', {
      templateUrl: 'contact.html'
    });
    $routeProvider.when('/community', {
      templateUrl: 'community.html'
    });
    $routeProvider.when('/gallery', {
      templateUrl: 'gallery.html'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
  }]);
