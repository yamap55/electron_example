const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

gulp.task("compile", function(){
  return gulp.src("./App.jsx")
    .pipe($.babel({
      "presets": ["es2015","stage-0","react"]
    }))
    .pipe(gulp.dest("./"));
});
