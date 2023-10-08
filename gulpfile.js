const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const worker_threads = require("worker_threads");
const concat = require('gulp-concat')
const mincss = require('gulp-cssmin')

function toSass() {
  return gulp.src('app/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(concat('all.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(mincss())
    .pipe(rename('main.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/css/'))
}

function watch() {
  gulp.watch('app/scss/*.scss', toSass)
}


gulp.task('default', gulp.series(toSass, watch))
