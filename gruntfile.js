module.exports = function(grunt){
	grunt.initConfig({
	pkg:grunt.file.readJSON('package.json'),

	cssmin: {
		target: {
    		files: [{
      			expand: true,
			      cwd: '',
			      src: ['*.css', '!*.min.css'],
			      dest: '',
			      ext: '.css'
    				}]
			  	}
			},
	sass: {
	    dist: {
	      files: [{
	        expand: true,
	        cwd: '',
	        src: ['*.scss'],
	        dest: '',
	        ext: '.css'
	      }]
	    }
  },
  	autoprefixer: {
	    options: {
	      browsers: ['last 4 versions']
	    },
	    your_target: {
	    		files: [{
				      cwd: '',
				      src: ['app.css', '!*.min.css'],
				      dest: '',
				      ext: ''
	    				}]
				  	
	    },
  },

	clean: {
	fstTask:{src:['www/']},
	sndTask:{src:['style.css.map', 'app.css']}
	}
	,
	copy: {
	  	main: {
	    files: [
	      // includes files within path
	      {expand: true, src: ['index.html'], dest: 'www/', filter: 'isFile'},
	      {expand: true, src: ['app.css'], dest: 'www/', filter: 'isFile'},
	      {expand: true, src: ['app.js'], dest: 'www/', filter: 'isFile'},
	      {expand: true, src: ['resources/**'], dest: 'www/'}
	    ],
	  }
	},
	watch: {
	  	scripts: {
	    files: ['*.scss', 'index.html', 'app.js'],
	    tasks: ["sass", "autoprefixer","cssmin", "copy", "clean:sndTask"],
  			},
	},
	serve: {
        options: {
        port: 9000
        }
    },
		});

grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-serve');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.task.renameTask('serve', 'sv');

// grunt.registerTask('default', ["clean:fstTask", "sass", "autoprefixer", "cssmin", "copy", "clean:sndTask"]);
grunt.registerTask('wtc', ["watch"]);
grunt.registerTask('serve', ["clean:fstTask", "sass", "autoprefixer", "cssmin", "copy", "clean:sndTask", "sv", "wtc"]);
};


