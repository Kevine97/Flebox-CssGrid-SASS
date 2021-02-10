const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

const css = () => {
  return gulp
    .src("./scss/app.scss")
    .pipe(autoprefixer())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("css"));
};
const watchFiles = () => {
  gulp.watch("./scss/*.scss", css);
  gulp.watch("*.html");
};

// tasks
gulp.task("css", css);
gulp.task("watch", gulp.parallel(watchFiles));
