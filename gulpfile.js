const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compiles SCSS files from /scss into /css
gulp.task('sass', function() {
    return gulp.src(['scr/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

// Watch & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './src'
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);

    gulp.watch(['scr/*.html']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);