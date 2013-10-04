angular.module('app', ['ngRoute','firebase'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', { controller: 'MainCtrl', templateUrl: 'templates/main.html'})
      .when('/gallery', { controller: 'MainCtrl', templateUrl: 'templates/gallery.html'})
      .when('/about', {controller: 'AboutCtrl', templateUrl: 'templates/about.html'})
      //.when('/viewer', { controller: 'ViewerCtrl', templateUrl: 'templates/viewer.html'})
      .when('/editor', {controller: 'EditorCtrl', templateUrl: 'templates/editor.html'})
      ;
    $locationProvider.html5Mode(true);
  })
  .constant('fburl', 'https://block-builder.firebaseio.com')
  .factory('projects', function(angularFireCollection) {
    var user = localStorage.getItem("user");
    var url = 'https://block-builder.firebaseio.com/users/' + user;
    return  angularFireCollection(new Firebase(url));
  })
  .run(function($rootScope, angularFireAuth, fburl) {
    var ref = new Firebase(fburl);
    angularFireAuth.initialize(ref, {scope: $rootScope, name: "user"});
    $rootScope.login = function() {
      angularFireAuth.login("persona");
    };
    $rootScope.logout = function() {
      localStorage.setItem('user', null);
      angularFireAuth.logout();
    };
    $rootScope.$on("angularFireAuth:login", function(evt, user) {
      localStorage.setItem('user', user.id);
    });
    $rootScope.isAuthor = function(email) {
      return $rootScope.user ? $rootScope.user.email === email : false;
    };
  });