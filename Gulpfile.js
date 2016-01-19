//'use strict';

var gulp =          require('gulp');
var rsync =         require('gulp-rsync');
var del =           require('del');
var jade =          require('gulp-jade');
var sass =          require('gulp-sass');
var assetFunc =     require('node-sass-asset-functions');
var autoprefixer =  require('gulp-autoprefixer');
var sourcemaps =    require('gulp-sourcemaps');
var svgo =          require('gulp-svgo');
var imagemin =      require('gulp-imagemin');
var concat =        require('gulp-concat');
var uglify =        require('gulp-uglify');
var plumber =       require('gulp-plumber');
var browserSync =   require('browser-sync');
var reload =        browserSync.reload;

// Delete all Public Files and Folders
gulp.task('clean', function() {
  del(['public/*'], function (err) {
      console.log('Files deleted');
  });
});

// Rsync Files to Server
gulp.task('deploy', function() {
  gulp.src('public/**')
    .pipe(plumber())
    .pipe(rsync({
      root: 'public',
      exclude: 'maps',
      shell: 'ssh',
      progress: true,
      hostname: 'carl-martens.com',
      username: 'martensj',
      destination: '~/public_html/carl-martens'
    }))
    .pipe(plumber.stop());
});

// Jade to HTML
gulp.task('markup', function() {
  var YOUR_LOCALS = {};

  gulp.src('./*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true,
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./public'))
    .pipe(reload({
      stream: true
    }));
});

// Move Misc Files
gulp.task('misc', function() {
  gulp.src(['./*.ico', './*.txt'])
    .pipe(plumber())
    .pipe(gulp.dest('./public'));
});

// SASS
gulp.task('sass', function() {
  gulp.src('./assets/sass/app.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths,
      outputStyle: 'compressed',
      functions: assetFunc({
        images_path: 'public/images',
        http_images_path: '/images'
      })

    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({
      stream: true
    }));
});

// Image Compression
gulp.task('images', function() {
  gulp.src([
    './assets/images/**/*.png',
    './assets/images/**/*.jpg',
    './assets/images/**/*.gif'
  ])
    .pipe(plumber())
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('./public/images'))
    .pipe(reload({
      stream: true
    }));
});

// SVG Compression
gulp.task('svgo', function() {
  gulp.src('./assets/images/**/*.svg')
    .pipe(plumber())
    .pipe(svgo())
    .pipe(gulp.dest('./public/images'))
    .pipe(reload({
      stream: true
    }));
});

// Concat and Compress JS Files
gulp.task('js', function() {
  gulp.src([
    './assets/js/classie.js',
    './assets/js/modalEffects.js',
    './assets/js/app.js'
  ])
    .pipe(plumber())
    .pipe(concat('app.min.js'))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest('./public/js'))
    .pipe(reload({
      stream: true
    }));
});

// BrowserSync
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './public'
    }
    //open: false
  });
});

// Default and Watch Tasks
gulp.task('default', ['markup', 'misc', 'sass', 'images', 'svgo', 'js', 'browser-sync'], function() {
  gulp.watch('./*.jade', ['markup']);
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
  gulp.watch('./assets/images/**/*', ['images']);
  gulp.watch('./assets/images/**/*.svg', ['svgo']);
  gulp.watch('./assets/js/**/*.js', ['js']);
});
