const { task, src, dest, series, watch } = require("gulp");
const babel = require("gulp-babel");
const minify = require("gulp-minify");
const sass = require("gulp-sass")(require("sass"));

task("js", () => {
  return src("src/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(minify())
    .pipe(dest("dist"));
});

task("css", () => {
  return src("src/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("dist"));
});

task("default", series("js", "css"));

task("watch", () => {
  watch("./src/*.scss", series("css"));
  watch("./src/*.js", series("js"));
});
