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
    "<center ng-hide=\"user\">\n" +
    "  <img src=\"img/blockbuilder.png\">\n" +
    "</center>\n" +
    "<div class=\"container\" ng-show=\"user\">\n" +
    "  <h3>My Projects</h3>\n" +
    "   <ul>\n" +
    "     <li ng-repeat=\"project in projects\">\n" +
    "       <a ng-href=\"/editor.html?id={{project.$id}}\" target=\"_new\">{{project.name}}</a>\n" +
    "     </li>\n" +
    "   </ul>\n" +
    "</div>"
  );


  $templateCache.put('templates/viewer.html',
    "<div id=\"game\"></div>"
  );

}]);
