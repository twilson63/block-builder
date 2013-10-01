angular.module('app').run(['$templateCache', function($templateCache) {

  $templateCache.put('templates/about.html',
    "<h2>About Block Builder</h2>"
  );


  $templateCache.put('templates/editor.html',
    ""
  );


  $templateCache.put('templates/gallery.html',
    "<div class=\"jumbotron\">\n" +
    "  <center>\n" +
    "    <h2>Gallery</h2>\n" +
    "    <p>Coming Soon!</p>\n" +
    "  </center>  \n" +
    "</div>"
  );


  $templateCache.put('templates/main.html',
    "<div class=\"jumbotron\">\n" +
    "  <div class=\"container\">\n" +
    "    <center><h1>Block Builder</h1></center>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<center>\n" +
    "  <img src=\"img/blockbuilder.png\">\n" +
    "</center>"
  );


  $templateCache.put('templates/viewer.html',
    "<div id=\"game\"></div>"
  );

}]);
