// Requires Gulp v4.

//------------------------------------------------------------------------------------------//
// Config
//------------------------------------------------------------------------------------------//
const { src, dest, watch, series, parallel } = require('gulp');


// SCSS Dependencies
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');


// JS Dependencies
const babel = require('gulp-babel');
const minify = require('gulp-minify');


// Pipeline Dependencies
const cache = require('gulp-cached');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const beeper = require('beeper');
const plumber = require('gulp-plumber');


// Server Dependencies
const browsersync = require('browser-sync').create();


const paths = {
  scripts: {
    main: 'src/js/src.js',
    es5: 'src/js/script.js',
    src: 'src/js/',
    input: 'src/js/plugins/**/*.js',
    output: 'assets/js/'
  },
  styles: {
    main: 'src/scss/style.scss',
    input: 'src/scss/**/*.{scss,sass}',
    output: 'assets/css/'
  },
  templates: {
    input: 'templates/**/*.twig',
  },
  localCompiled: {
    css: 'assets/css/style.css',
    js: 'assets/js/script.js'
  }
};


//------------------------------------------------------------------------------------------//
// SCSS
//------------------------------------------------------------------------------------------//

// Compile CSS from Sass.
function buildStyles() {
  return src(paths.styles.main)
    .pipe(plumbError())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer(['last 6 versions', '> 1%']))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.styles.output))
    .pipe(browsersync.reload({ stream: true }));
}

function buildMinifiedStyles() {
  return src(paths.styles.main)
    .pipe(plumbError())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(['last 6 versions', '> 1%']))
    .pipe(rename('style-min.css'))
    .pipe(dest(paths.styles.output))
    .pipe(browsersync.reload({ stream: true }));
}

function watchScss() {
  watch(
    [paths.styles.main, paths.styles.input], { events: 'all', ignoreInitial: false },
    series([buildStyles, buildMinifiedStyles])
  );
}

function browserSync(done) {
  browsersync.init({
    //server: {
    //  baseDir: './'
    //},
    //socket: {
    //  domain: 'localhost:3000/frugal'
    //},
    //port: 8080,
    proxy: 'http://frugalfun4boys.local', // MAMP vhost
    host: 'frugalfun4boys.local',
    open: 'external',
		reloadOnRestart: true,
    
    files: [paths.templates.input]
  });
  done();
}

function plumbError() {
  return plumber({
    errorHandler: function(err) {
      notify.onError({
        templateOptions: {
          date: new Date()
        },
        title: "Gulp error in " + err.plugin,
        message: err.formatted
      })(err);
      beeper();
      this.emit('end');
    }
  })
}

function jsTranspile() {
  return src(paths.scripts.main)
    .pipe(plumbError())
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(rename('script.js'))
    .on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(dest(paths.scripts.src))
}

function jsConcat() {
  return src([paths.scripts.input, paths.scripts.es5])
    .pipe(plumbError())
    .pipe(concat('script.js'))
    .on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(dest(paths.scripts.output))
    .pipe(browsersync.reload({ stream: true }));
}

function jsConcatMinified() {
  return src([paths.scripts.input, paths.scripts.es5])
    .pipe(plumbError())
    .pipe(concat('script.js'))
    .pipe(minify())
    .on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(dest(paths.scripts.output))
    .pipe(browsersync.reload({ stream: true }));
}


function watchJs() {
  watch(
    [paths.scripts.main, paths.scripts.input], { events: 'all', ignoreInitial: false },
    series([jsTranspile, jsConcat, jsConcatMinified])
  );
}



//------------------------------------------------------------------------------------------//
// Commands
//------------------------------------------------------------------------------------------//

exports.default = parallel(browserSync, watchScss, watchJs); // $ gulp
exports.sass = buildStyles; // $ gulp sass
exports.watch = parallel(watchScss); // $ gulp watch
exports.build = series(buildStyles); // $ gulp build