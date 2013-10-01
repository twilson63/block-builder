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
  .run(function($rootScope, angularFireAuth, fburl) {
    var ref = new Firebase(fburl);
    angularFireAuth.initialize(ref, {scope: $rootScope, name: "user"});
    $rootScope.login = function() {
      angularFireAuth.login("persona");
    };
    $rootScope.logout = function() {
      angularFireAuth.logout();
    };
    // $rootScope.$on("angularFireAuth:login", function(evt, user) {
    //   console.log(user);
    // });
    $rootScope.isAuthor = function(email) {
      return $rootScope.user ? $rootScope.user.email === email : false;
    };
  });
angular.module('app')
  .controller('AboutCtrl', function($scope) {
  });

angular.module('app')
  .controller('EditorCtrl', function($scope) {
  });

angular.module('app')
  .controller('GalleryCtrl', function($scope) {

  });

angular.module('app')
  .controller('MainCtrl', function($scope) {

  });

angular.module('app')
  .controller('ViewerCtrl', function($scope) {
  });
