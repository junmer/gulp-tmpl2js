/**
 * @file gulp tmpl2js test
 * @author junmer
 */

/* eslint-env node */

'use strict';
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var gutil = require('gulp-util');
var tmpl2js = require('./');

it('tmpl2js: ext is .js, typeof code is string', function (cb) {


    var stream = tmpl2js();

    stream.on('data', function (file) {

        // ext is .js
        assert(path.extname(file.path) === '.js');

        var code = new Function('return ' + file.contents.toString('utf-8'))();

        // code is string
        assert(typeof code === 'string');

    });

    stream.on('end', cb);

    stream.write(new gutil.File({
        path: path.join(__dirname, '/fixture.tpl'),
        contents: fs.readFileSync('fixture.tpl')
    }));

    stream.end();
});

