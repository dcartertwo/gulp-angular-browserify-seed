var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

gulp.task('lint', function() {
  gulp.src('./app/app/app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('clean', function() {
    gulp.src('./app/js/app.js', {read: false})
        .pipe(clean());
});

gulp.task('browserify', function() {
    gulp.src(['./app/app/*.js'])
        .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./app/js'))
});

gulp.task('minify-css', function() {
  gulp.src('./static/css/*.css')
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('minify-html', function() {
  gulp.src('./static/html/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('imagemin', function () {
    gulp.src('src/image.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist'));
});

//TODO add support for source maps
gulp.task('minify-js', function() {
  gulp.src('./app/js/*.js')
    .pipe(uglify({
    	// inSourceMap: 
    	// outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./app/js'))
});

gulp.task('default', function(){
  gulp.run('clean', 'browserify', 'lint');
});
