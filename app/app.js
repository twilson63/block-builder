angular.module('app', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', { controller: 'MainCtrl', templateUrl: 'templates/main.html'})
      .when('/gallery', { controller: 'MainCtrl', templateUrl: 'templates/gallery.html'})
      .when('/about', {controller: 'AboutCtrl', templateUrl: 'templates/about.html'})
      //.when('/viewer', { controller: 'ViewerCtrl', templateUrl: 'templates/viewer.html'})
      .when('/editor', {controller: 'EditorCtrl', templateUrl: 'templates/editor.html'})
      ;
    $locationProvider.html5Mode(true);
  });