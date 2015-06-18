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
            options: {
                beginTag: "'''",
                endTag: "'''"
            },
            replaceWithTheSourceFile: {
                files: [{
                    expand: true,
                    cwd: 'test/temp',
                    src: '**/*.js',
                    dest: 'test/temp'
                }]
            },
            replaceToNewFile: {
                options: {
                    beginTag: "'@'/*",
                    endTag: "*/"
                },
                files: {
                    'test/build/otherTag.js': ['test/src/otherTag.js']
                }
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