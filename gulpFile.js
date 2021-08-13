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
    .pipe(autoprefixer("last 2 versions"))
    .pipe(dest(scssFiles.dest));

const watchScss = () => watch(scssFiles.src, scssCompilation);

//Default Task
exports.default = series(scssCompilation, watchScss);
