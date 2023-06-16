const {
    src,
    dest
} = require('gulp');
const changed = require('gulp-changed');

module.exports = function _json(done) {
    return src('src/json/**/*.json')
        .pipe(changed('build/json', {
            extension: '.json',
            hasChanged: changed.compareLastModifiedTime
        }))
        .pipe(dest('build/json'))
    done();
}