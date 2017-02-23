var concat = require('gulp-concat');
var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify');

gulp.task('compress', function (cb) {
  pump([
        gulp.src([
          './_site/js/jquery-2.1.4.js',
          './_site/js/function.js',
          './_site/js/bootstrap.js',
          './_site/js/slick.js',
          './_site/js/easyResponsiveTabs.js',
          './_site/js/timer.js',
          './_site/js/jquery.final-countdown.js',
          './_site/js/jquery.dlmenu.js',
          './_site/js/jquery.countdown.js',
          './_site/js/jquery.masonarygrid.js',
          './_site/js/jquery.fancybox.js',
          './_site/js/wow.js',
          './_site/js/jquery.validate.min.js',
          './_site/js/*.js'
        ]),
        concat('all.js'),
        uglify(),
        gulp.dest('./_site/dist/js')
    ],
    cb
  );
});
