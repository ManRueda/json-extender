module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      build: {
        options: {
          sourceMap: true,
          sourceMapName: 'dist/JSONExtender.min.map'
        },
        files: {
          'dist/JSONExtender.min.js': 'src/JSONExtender.js'
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'src/*.js']
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('release', ['jshint', 'uglify:build']);

};
