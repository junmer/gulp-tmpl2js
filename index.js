/**
 * @file gulp tmpl2js
 * @author junmer
 */

/* eslint-env node */

'use strict';
var extend = require('xtend');
var through = require('through2');
var PluginError = require('gulp-util/lib/PluginError');
var html2js = require('html2js');
var replaceExt = require('replace-ext');
var pluginName = 'gulp-tmpl2js';


function setup(opts) {
    var options = extend({}, opts, {
        clone: false,
        ext: '.js'
    });
    return options;
}


module.exports = function (opts) {

    function tmpl2js(file, encoding, callback) {

        var options = setup(opts || {});

        if (file.isNull()) {
            return callback(null, file);
        }

        if (file.isStream()) {
            return callback(new PluginError(pluginName, file.path + ': Streaming not supported', {
                fileName: file.path,
                showStack: false
            }));
        }

        // clone
        if (options.clone) {
            this.push(file.clone());
        }

        // replace ext
        file.path = replaceExt(file.path, options.ext);

        // html2js
        file.contents = new Buffer(
            html2js(file.contents.toString(encoding), options)
        );

        callback(null, file);

    }

    return through.obj(tmpl2js);
};
