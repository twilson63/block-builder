angular.module('app').run(['$templateCache', function($templateCache) {

  $templateCache.put('templates/about.html',
    "<h2>About Block Builder</h2>"
  );


  $templateCache.put('templates/editor.html',
    ""
  );


  $templateCache.put('templates/gallery.html',
    "<div class=\"jumbotron\">\n" +
    "  <h2>Gallery</h2>\n" +
    "  <p>Coming Soon!</p>  \n" +
    "</div>"
  );


  $templateCache.put('templates/main.html',
    "<div class=\"jumbotron\">\n" +
    "  <div class=\"container\">\n" +
    "   <h1>Block Builder</h1>\n" +
    "  </div>\n" +
    "  <a href=\"/viewer.html\" target=\"_new\">Viewer</a>\n" +
    "</div>"
  );


  $templateCache.put('templates/viewer.html',
    "<div id=\"game\"></div>"
  );

}]);
