/*
 * grunt-multi-line
 * https://github.com/bigfactory/grunt-multi-line
 *
 * Copyright (c) 2015 xiaocong.hxc
 * Licensed under the MIT license.
 */

'use strict';

var chalk = require('chalk');
var path = require('path');

module.exports = function(grunt) {

    grunt.registerMultiTask('multiline', 'triple quotes multi lines', function() {
        var options = this.options({
            beginTag: "'''",
            endTag: "'''"
        });

        this.files.forEach(function(f) {
            var src;

            src = f.src.map(function(srcFile) {

                var destFile, srcCode;

                if(f.dest){
                    destFile = path.join(f.dest, srcFile);
                }
                else{
                    destFile = srcFile;
                }

                srcCode = grunt.file.read(srcFile);
                srcCode = replace(srcCode, options);

                grunt.file.write(destFile, srcCode);
                grunt.log.writeln('File ' + chalk.cyan(destFile) + ' updated');
                
            });


        });
    });

};

function replace(code, options){
    var beginTag = options.beginTag.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&])/g,"\\$&");
    var endTag = options.endTag.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&])/g,"\\$&");
    var regStr = beginTag + '([\\s\\S]*?)' + endTag
    var regx = new RegExp(regStr, 'g');
    code = code.replace(regx, function(){
        return "'" + arguments[1].replace(/\r/g, '\\\r').replace(/\n/g, '\\\n') + "'";
    });

    return code;
}