var appFiles = [
  'app/app.js',
  'app/controllers/**/*.js'
];

var templateFiles = [
  'app/templates/**/*.html'
];

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      app: {
        src: appFiles
      }
    },
    concat: {
      app: {
        src: appFiles,
        dest: 'public/js/app.js'
      }
    },
    ngtemplates: {
      app: {
        cwd: 'app',
        src: 'templates/**/*.html',
        dest: 'public/js/templates.js'
      }
    },
    watch: {
      app: {
        files: appFiles,
        tasks: ['jshint', 'concat']
      },
      templates: {
        files: templateFiles,
        tasks: 'ngtemplates'
      }
    },
    connect: {
      server: {
        options: {
          port: 3000,
          base: 'public'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('default', ['jshint', 'ngtemplates', 'concat']);
}