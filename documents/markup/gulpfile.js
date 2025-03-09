//for generate css use commands that writes below and start them in the terminal for every single project:

//gulp watch

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    scss = require('gulp-sass')(require('sass')),
    autoprefixer = require("gulp-autoprefixer"),
    sourcemaps = require("gulp-sourcemaps"),
    newer = require('gulp-newer'),
    clean_css = require('gulp-clean-css'),
    purgecss = require('gulp-purgecss'),
    plumber = require("gulp-plumber"),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify-es').default,
    rename = require('gulp-rename');

let openhelp_project = "../public";
let openhelp_source = "openhelp";

// theme path
let openhelp_theme_source = "openhelp/theme";

let path = {
    openhelp_build: {
        css: openhelp_project + "/css",
        fonts: openhelp_project + "/assets/fonts",
        markupCss: openhelp_source + "/css",
        js: openhelp_project + "/js",
    },
    openhelp_src: {
        theme: openhelp_theme_source + "/variables.scss",
        scss: openhelp_source + "/scss/styles.scss",
        fonts: openhelp_source + "/assets/fonts/**/*.{woff,woff2,eot,svg,ttf}",
        js: openhelp_source + "/js/editor/**/*.js",
    },
    openhelp_watch: {
        theme: openhelp_theme_source + "/*.scss",
        scss: openhelp_source + "/scss/**/*.scss",
        fonts: openhelp_source + "/assets/fonts/**/*.{woff,woff2,eot,svg,ttf}",
        js: openhelp_source + "/js/editor/**/*.js",
    },
}

// if you need to remove unused css - use this and edit paths
gulp.task('purgecss', () => {
    return gulp.src('dist/css/style.css')
        .pipe(purgecss({
            content: ['dist/index.html']
        }))
        .pipe(gulp.dest('dist/css'))
})

// new Drived
function openhelpCss() {
    return src(path.openhelp_src.scss)
        .pipe(plumber(onError))
        .pipe(newer(path.openhelp_build.css))
        .pipe(sourcemaps.init())
        .pipe(scss({outputStyle: "compressed"}))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(sourcemaps.write())
        .pipe(dest(path.openhelp_build.markupCss))
        .pipe(clean_css({level: {1: {specialComments: 0}}}))
        .pipe(dest(path.openhelp_build.css))
}

// Generate css theme
function openhelpTheme() {
    return src(path.openhelp_src.theme)
        .pipe(plumber(onError))
        .pipe(newer(path.openhelp_build.css))
        .pipe(scss({outputStyle: "compressed"}))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(dest(path.openhelp_build.css))
        .pipe(dest(path.openhelp_build.markupCss))
}

function openhelpExportFonts() {
    return src(path.openhelp_src.fonts, {encoding: false})
        .pipe(dest(path.openhelp_build.fonts))
}


function watchOpenhelpFiles(params) {
    gulp.watch([path.openhelp_watch.scss], openhelpCss);
    gulp.watch([path.openhelp_watch.theme], openhelpTheme);
}

function onError(err) {
    console.log(err); //or other way you may prefer to log
    this.emit('end');
}

let openhelp_build = gulp.series(gulp.parallel(openhelpCss, openhelpTheme, openhelpExportFonts));
let watch = gulp.parallel(openhelp_build, watchOpenhelpFiles);

exports.css = openhelpTheme;
exports.css = openhelpCss;
exports.openhelpExportFonts = openhelpExportFonts;
exports.build = openhelp_build;
exports.watch = watch;
