/**
 * Created by HP on 2017/9/5.
 */
var gulp=require('gulp');
var rev=require('gulp-rev');
var mincss=require('gulp-minify-css');
var clean=require('gulp-clean');
var minhtml=require("gulp-minify-html")
var autoprefixer=require('gulp-autoprefixer');
var revCollector=require('gulp-rev-collector');

//clean清除
gulp.task("clean",function(){
    gulp.src("./rev")
        .pipe(clean({read:false}))
});
//路径替换
gulp.task('rev', function () {
    gulp.src(['./rev/css/*.json','./html/*.html'])
        .pipe( revCollector({
            replaceReved: true,
            dirReplacements: {
                '../css': '../css'
            }
        }) )
        .pipe( minhtml({
            empty:true,
            spare:true
        }) )
        .pipe( gulp.dest('./dist/html') );
});


//css编译，语法检查，css3自动补全浏览器前缀，压缩,重命名，计算md5值，替换css文件应用路径
gulp.task('css', function () {
    return gulp.src('./css/*.css')
        .pipe(autoprefixer())
        .pipe(mincss())
        .pipe(rev())
        .pipe(gulp.dest('./dist/css'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( './rev/css' ) );
});
