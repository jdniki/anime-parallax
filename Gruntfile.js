'use strict';

var path = require('path');

module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		connect: {
			web: {
			  options: {
			    port: 9000,
			    base: 'app',
			    keepalive: true,
			    hostname : "0.0.0.0"
			  }
			}
		}
	});

	// register plugins
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default', ['connect']);
};