let gulp = require("gulp");//先引入gulp
let minifyJS = require("gulp-babel-minify")//引入js翻译&压缩
let minifyCSS = require("gulp-clean-css")//引入CSS压缩
let connect = require("gulp-connect")
gulp.task("build",()=>{
    //压缩JS
   gulp.src("./src/**/*.js")//读取文件
        .pipe(minifyJS())//输送到JS翻译、压缩命令
        .pipe(gulp.dest("./dist"))//传输保存到 dist文件夹

    //搬运html
    gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"))   
    
    //压缩CSS
    gulp.src("./src/**/*.css")
        .pipe(minifyCSS())
        .pipe(gulp.dest("./dist"))
});

gulp.task("server",()=>{
    connect.server({
        root:"dist",
        port:8080,
        livereload:true
    })
    gulp.watch("./src/**/*.html",["refreshHTML"])

    gulp.watch("./src/**/*.js",["refreshJS","refreshHTML"])
    
    gulp.watch("./src/**/*.css",["refreshCSS","refreshHTML"])
})


gulp.task("refreshHTML",()=>{
    console.log("更新HTML")
    gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"))
        .pipe(connect.reload())
})

gulp.task("refreshJS",()=>{
    console.log("更新JS")
    gulp.src("./src/**/*.js")
        .pipe(minifyJS())
        .pipe(gulp.dest("./dist"))
        .pipe(connect.reload())
})

gulp.task("refreshCSS",()=>{
    console.log("更新CSS")
    gulp.src("./src/**/*.css")
        .pipe(minifyCSS())
        .pipe(gulp.dest("./dist"))
        .pipe(connect.reload())
})



