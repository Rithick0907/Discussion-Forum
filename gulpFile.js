const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");

//Custom Variables
const { src, dest, series, watch } = gulp;
const scssFiles = {
  src: "./src/scss/**/*.scss",
  dest: "./src",
};

//Scss Compilation Task
const scssCompilation = () =>
  src(scssFiles.src)
    .pipe(sass())
    .pipe(autoprefixer("last 2 versions"))  //"last 2 versions" means support latest stable version (not beta or nightly builds) and one version earlier.
    .pipe(dest(scssFiles.dest));

const watchScss = () => watch(scssFiles.src, scssCompilation);

//Default Task
exports.default = series(scssCompilation, watchScss);
