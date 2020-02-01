var gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat"),
  plumber = require("gulp-plumber"),
  rename = require("gulp-rename"),
  uglify = require("gulp-uglify"),
  watch = require("gulp-watch"),
  sourcemaps = require("gulp-sourcemaps"),
  postcss = require("gulp-postcss"),
  cssnano = require("gulp-cssnano"),
  babel = require("gulp-babel");

/**paths to files */
var paths = {
  /**style files**/
  styles: {
    src: "src/scss/**/*.scss",
    dist: "app/css"
  },

  /**html file**/
  html: "app/index.html", //vendors: 'src/js/vendor/',

  /**js files**/
  scripts: {
    vendor: "src/js/vendors/",
    src: "src/js/",
    dist: "app/js"
  }
};

/**ordered list of jsfiles - this order is used to concatinate the files **/
var jsSRC = [
  //My files
  paths.scripts.src + "main.js"
];

/**SASS */
function cssStyles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        errorLogToConsole: true,
        outputStyle: "expanded"
      })
    )
    .pipe(sass.sync({ outputStyle: "expanded" }))
    .on("error", sass.logError)
    .pipe(
      postcss(
        autoprefixer(),
        cssnano({
          reduceIdents: false
        })
      )
    )
    .pipe(rename("style.css"))
    .pipe(sourcemaps.write("/"))
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(browserSync.stream());
}

/**JS**/
function javascript() {
  return (
    gulp
      .src(jsSRC)
      .pipe(sourcemaps.init())
      .pipe(concat("index.js"))
      .pipe(babel())
      //.pipe(uglify())
      .pipe(sourcemaps.write("/"))
      .pipe(gulp.dest(paths.scripts.dist))
      .pipe(browserSync.stream())
  );
}

function watchFiles() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }

    // tunnel: true,
    // online: true
  });

  gulp.watch(paths.styles.src, cssStyles);

  gulp.watch(jsSRC, javascript);

  gulp
    .watch([
      paths.html,
      paths.styles.dist + "style.css" /*change to style.min.css later*/,
      paths.scripts.dist +
        "index.js" /*same filename is used as in rename() method*/
    ])
    .on("change", browserSync.reload);
  console.log("All is running fine. GOOD LUCK");
}
var serve = gulp.parallel(watchFiles);
gulp.task("default", gulp.series(serve));

exports.cssStyles = cssStyles;
exports.javascript = javascript;
exports.watchFiles = watchFiles;
