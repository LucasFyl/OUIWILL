module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //=== Init project
    project: {
        app: '<%= _.slugify(appname) %>',
        assets: 'assets/',
        scss: ['<%= project.assets %>scss/app.scss']
    },

    //=== include all bowerlibs
    bower_concat: {
      js: {
        dest: 'assets/js/vendors.js',
        mainFiles: {
          'retinajs': 'retina.js',
          'bourbon': 'index.js',
          'neat': 'neat.js'
        },
      },
      css: {
        cssDest: 'assets/css/vendors.css',
        mainFiles: {
          'highlightjs': 'styles/github.css',
        },
        exclude: ['foundation', 'retinajs', 'bourbon', 'neat']
      }
    },

    //=== compress js
    uglify: {
      bower: {
        options: {
          compress: {
            warnings: false
          },
          mangle: true,
        },
        files: {
          'assets/js/vendors.min.js': 'assets/js/vendors.js'
        }
      },
      app: {
        options: {
          compress: {
            warnings: false
          },
          mangle: true,
        },
        files: {
          'assets/js/app.min.js': 'assets/js/app.js'
        }
      }
    },

    //=== compile scss

    sass: {
        dev: {
            options: {
                expand: true,
                sourcemap: true,
                outputStyle: 'compressed',
            },
            files: {
                '<%= project.assets %>css/app.css': '<%= project.scss %>'
            }
        },
        build: {
            options: {
                style: 'nested',
                precision: 5
            },
            files: {
                expand: true,
                sourcemap: true,
                outputStyle: 'compressed',
                '<%= project.assets %>css/app.css': '<%= project.scss %>'
            }
        }
    },

    //=== add browser prefixes
    autoprefixer: {
      bower: {
        expand: true,
        cwd: 'build',
        src: 'assets/css/vendors.css',
        dest: 'assets/css'
      },
      app: {
        expand: true,
        cwd: 'build',
        src: 'assets/css/app.css',
        dest: 'assets/css'
      }

    },

    //=== combine and compress css
    cssmin: {
      bower: {
        files: {
          'assets/css/vendors.min.css': 'assets/css/vendors.css'
        }
      },
      app: {
        files: {
          'assets/css/app.min.css': 'assets/css/app.css'
        }
      }
    },

    // grunt-watch will monitor the projects files
    watch: {
      scss: {
        files: '<%= project.assets %>scss/{,**/}*.scss',
        expand: true,
        tasks: 'build-sass',
      },
      js: {
        files: 'assets/js/app.js',
        tasks: 'uglify:app',
      },
      livereload: {
        files: ['assets/js/*.js',
                'assets/css/*.css',
                'site/**/*.php'],
        options: { livereload: true }
      }
    },

    clean: {
      site: {
        src: ["dist/"],
      },
    },

    copy: {
      site: {
        files: [
          // includes files within path
          {expand: true,
           src: ['assets/**/*',
                 'kirby/**/*',
                 'panel/**/*',
                 'site/**/*',
                 'content/site.txt',
                 'content/error/**/*',
                 'content/search/**/*',
                 'content/impressum/**/*',
                 '!**/accounts/**',
                 '!**/avatars/**',
                 '!**/scss/**',
                 '!**/.git/**',
                 '.htaccess',
                 'index.php',
                 ],
           dest: 'dist/'},
          {expand: true,
           filter: 'isFile',
           src: ['content/1-blog/archive/*',
                 'content/1-blog/feed/*',
                 'content/1-blog/posts/*',
                 'content/1-blog/*',
                 ],
           dest: 'dist/'},
        ],
      },
      fontawesome: {
        files: [{
          expand: true,
          flatten: true,
          src: ['bower_components/fontawesome/fonts/**/*'],
          dest: 'assets/fonts/'
          },
        ],
      },
    },

    processhtml: {
      site: {
        files: {
         'dist/site/snippets/footer.php': ['site/snippets/footer.php']
        },
      },
    },
  });

  //=== require all tasks
  require('load-grunt-tasks')(grunt);

  //== Default task(s).
  // build bowerlibs
  grunt.registerTask('build-bower', [
    'bower_concat:js',
    'uglify:bower',
    'bower_concat:css',
    // 'autoprefixer:bower',
    'cssmin:bower',
    'copy:fontawesome',
  ]);

  // build app css
  grunt.registerTask('build-sass', [
    'sass:dev',
    'autoprefixer:app',
    'cssmin:app',
  ]);

  // build
  grunt.registerTask('build', [
    'build-bower',
    'uglify:app',
    'build-sass',
  ]);

  // build dev
  grunt.registerTask('deploy', [
    'build',
    'clean',
    'copy:site',
    'processhtml',
  ]);
};
