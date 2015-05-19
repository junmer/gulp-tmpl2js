# gulp-tmpl2js 

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads][downloads-image]][npm-url]
[![Dependencies][dep-image]][dep-url]

[downloads-image]: http://img.shields.io/npm/dm/gulp-tmpl2js.svg
[npm-url]: https://npmjs.org/package/gulp-tmpl2js
[npm-image]: http://img.shields.io/npm/v/gulp-tmpl2js.svg

[travis-url]: https://travis-ci.org/junmer/gulp-tmpl2js
[travis-image]: http://img.shields.io/travis/junmer/gulp-tmpl2js.svg

[dep-url]: https://david-dm.org/junmer/gulp-tmpl2js
[dep-image]: http://img.shields.io/david/junmer/gulp-tmpl2js.svg


> Gulp plugin for compile tmpl to js string, optional amd or commonjs wraper.

## Install

```
$ npm install --save-dev gulp-tmpl2js
```

## Usage

```js
var gulp = require('gulp');
var tmpl2js = require('gulp-tmpl2js');

gulp.task('default', function () {
    return gulp.src('src/*.tpl')
        .pipe(tmpl2js())
        .pipe(gulp.dest('dist'));
});
```


## API

### tmpl2js([options])

Options:

* `mode`: A string naming js code style. Optional. Possible values:
    * `undefined` (default): keep space and carriage of source html
    * `compress`: strip the extra spaces or carriage at the beginnings and ends of the lines
    * `format`: format js code as [spec](https://github.com/ecomfe/spec/blob/master/javascript-style-guide.md#%E5%BB%BA%E8%AE%AE-%E4%BD%BF%E7%94%A8-%E6%95%B0%E7%BB%84-%E6%88%96--%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2)

* `wrap`: A string naming js code wrapper. Optional. Possible values:
    * `undefined` (default): no wrapper
    * `amd`: wrap with [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)
    * `commonjs`: wrap with [CommonJS](http://www.commonjs.org/)

* `ignoreScriptTag`: boolean to ignore fix [split the script tag when writing it with document write](http://stackoverflow.com/questions/236073/why-split-the-script-tag-when-writing-it-with-document-write). Defaults to `false`

* `clone`: boolean to keep source tpl file. Defaults to `false`

* `ext`: target file extname. Defaults to `.js`

## Related

- [html2js](https://github.com/jumer/html2js)

## License

MIT
