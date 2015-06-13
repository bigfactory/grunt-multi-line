/*
 * grunt-xtemplate
 * https://github.com/john/grunt-xtemplate
 *
 * Copyright (c) 2014 xiaocong.hxc
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Configuration to be run (and then tested).
        multiline: {
            
            replace: {
                files: [{
                    src: './test/src/index.js',
                    dest: './test/temp/'
                }]
            },
            replace2: {
                options: {
                    beginTag: "'@'/*",
                    endTag: "*/;"
                },
                files: [{
                    src: './test/src/otherTag.js',
                    dest: './test/temp/'
                }]
            }
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');


    // By default, lint and run all tests.
    grunt.registerTask('default', ['multiline']);

};