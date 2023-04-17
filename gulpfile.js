const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.libs_style = tasks.libs_style;
exports.style = tasks.style;
exports.dev_js = tasks.dev_js;
exports.html = tasks.html;
exports.bs_html = tasks.bs_html;
exports.watch = tasks.watch;

exports.default = gulp.parallel(
  exports.libs_style,
  exports.style,
  exports.dev_js,
  exports.html,
  exports.bs_html,
  exports.watch
)