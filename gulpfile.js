var gulp = require('gulp');

var server = require('gulp-webserver');

var data = require('./src/data/data.json')

gulp.task('server', function () {
    gulp.src('src')
        .pipe(server({
            port:8080,
            open:true,
            livereload:true,
            middleware:function (req, res, next) {
                if (req.url === '/loing') {
                    res.setHeader('Content-Type','text/json;charset=UTF-8')
                    res.end(JSON.stringify(data))
                }
                next()
            }
        }))
})