var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var clean = require('gulp-clean');

var plugin = 'plugins/pixiu/commerce/';
var theme = 'themes/pixiu/';

gulp.task('css', function() {
    return gulp.src(theme + 'assets/less/bundle.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(theme + 'assets/dist'))
});

gulp.task('js', function() {
    return gulp.src(plugin + 'assets/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
        	presets: ['es2015'], 
        	plugins: ['transform-es2015-modules-amd']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(plugin + 'assets/dist'))
});

gulp.task('default', ['css', 'js']);

gulp.task('clean', function() {
	return gulp.src([theme + 'assets/dist', plugin + 'assets/dist'], {read: false})
		.pipe(clean());
});
