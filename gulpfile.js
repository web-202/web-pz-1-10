const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const worker_threads = require("worker_threads");
const concat = require('gulp-concat')
const mincss = require('gulp-cssmin')
const fs = require('fs');
const path = require('path');

function generateScssFilePaths(directory) {
  let scssFiles = fs.readdirSync(directory).filter((file) => file.endsWith('.scss')).map((file) => path.join(directory, file)).join(' ');
  let directories = fs.readdirSync(directory).filter((file) => !file.endsWith('.scss'))
  for (const dir of directories) {
    scssFiles += ' ' + generateScssFilePaths(path.join(directory, dir))
  }
  return scssFiles;
}

function toSass() {
  let arr = generateScssFilePaths('app/scss').split(' ')
  let temp = arr.shift()
  arr.push(temp)
  console.log(arr)
  return gulp.src(arr.filter((file) => file.endsWith('.scss')))
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
  gulp.watch(['app/scss/**/*.scss', 'app/scss/*.scss'], toSass)
}


gulp.task('default', gulp.series(toSass, watch))
