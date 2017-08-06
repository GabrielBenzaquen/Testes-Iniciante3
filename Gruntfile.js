module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({

		autoprefixer: {            
      dist: {
       files: {
         'deploy/css/main.css': 'deploy/css/main.css',
       },
     },
   },

   copy: {
     dist: {
      files: [
      {
                      expand: true, //habilita o cwd
                      cwd: 'source/',    //relativo à source, mas não a inclui na cópia          
                      src: 'vendor/*', 
                      dest: 'deploy/'
                    },
                    {
                      expand: true, //habilita o cwd
                      cwd: 'source/',
                      src: 'index.html', 
                      dest: 'deploy/'}
                      ]        
                    }
                  },

                  clean: {
                   dist: {
                    src: ["deploy"]
                  }
                },

                cssmin: {
                 dist: {
                  files: {
                   'deploy/css/main.css': 'deploy/css/main.css'
                 }
               }
             },

             uglify: {
               options: {
                mangle: true
              },

              dist: {
                files: {
                 'deploy/js/app.min.js': [
                 'source/js/incrementButton.js', 
                 'source/js/date.js'
                 ]
               }
             },
           },

           sass: {            
            dist: {
             files: {
              'deploy/css/main.css': 'source/sass/main.scss',
            },
          },
        },


      });


grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('deploy', ['clean', 'sass', 'autoprefixer', 'cssmin', 'uglify', 'copy'])


}