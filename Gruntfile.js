module.exports = function(grunt) {

  // grunt.loadNpmTasks('grunt-contrib-nodeunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    // nodeunit: {
    //   files: ['test/**/*.js']
    // },
    // watch: {
    //   files: '<%= jshint.files %>',
    //   tasks: 'default'
    // },
    modernizr: {
      dist: {}
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

};
