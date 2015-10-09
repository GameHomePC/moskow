var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var conf = require('./gulpconf');

gulp.task('browser-sync', function() {
  browserSync.init({
    tunnel: false,
    server: {
      baseDir: "./build"
    }
  });
});

gulp.task('html', function(){
  gulp.src(conf.html.src)
    .pipe(gulp.dest(conf.html.build));
});

gulp.task('font', function(){
  gulp.src(conf.font.src)
    .pipe(gulp.dest(conf.font.build));
});

gulp.task('img', function(){
  gulp.src(conf.img.src)
    .pipe(gulp.dest(conf.img.build));
});

gulp.task('css', function(){
  gulp.src(conf.css.src)
    .pipe(gulp.dest(conf.css.build));
});

gulp.task('sass', function(){
  var processors = [
    autoprefixer({
      browsers: ['last 100 versions']
    })
  ];

  gulp.src(conf.sass.src)
    .pipe(sass().on('error', function(err){
      console.log(err);
    }))
    .pipe(postcss(processors))
    .pipe(gulp.dest(conf.sass.build))
    .pipe(browserSync.stream());
});

gulp.task('js', function(){
  gulp.src(conf.js.src)
    .pipe(gulp.dest(conf.js.build))
    .pipe(browserSync.stream());
});

gulp.task('build', ['html', 'img', 'sass', 'js', 'css', 'font']);
gulp.task('build:clean', function(){
  gulp.src('./build', { read: false })
    .pipe(clean());
});

gulp.task('watch', ['build'], function(){
  gulp.watch(conf.html.watch, ['html']);
  gulp.watch(conf.img.watch, ['img']);
  gulp.watch(conf.css.watch, ['css']);
  gulp.watch(conf.sass.watch, ['sass']);
  gulp.watch(conf.js.watch, ['js']);
  gulp.watch(conf.font.watch, ['font']);
});

gulp.task('default', ['watch', 'browser-sync']);
