const {
  watch,
  parallel
} = require('gulp');

module.exports = function watching() {
  watch('src/**/*.html', parallel('html'));
  watch('src/**/*.scss', parallel('style'));
  watch('src/**/*.js', parallel('dev_js'));
  watch('src/**/*.json', parallel('html'));
  watch('src/svg/css/**/*.svg', parallel('style'));
}