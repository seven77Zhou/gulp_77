//此处代码都是由node执行
'use strict';


/*
 LESS 编译 压缩 合并
 JS 合并 压缩 混淆
 img复制
 * */

//载入gulp模块
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

//注册一个任务
gulp.task('copy',function(){
	//当Gulp执行这个say任务时会自动执行该函数
	//console.log('hello qq');
	//复制文件,gulp.src 取一个文件
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist/'));//将此处需要的操作传递进去
})

gulp.task('listening',function(){
	//监听文件一旦发生变化，执行copy任务
	gulp.watch('src/index.html',['copy'])
	gulp.watch('src/style/*.less',['style'])
})
//less转化css，压缩
gulp.task('style',function(){
	gulp.src(['src/style/*.less','!src/style/_*.less'])//代表不取前面有下划线的less文件
		.pipe(less())
		.pipe(cssnano())
		.pipe(gulp.dest('dist/css/'))
})
//JS 合并  压缩混淆
gulp.task('script',function(){
	gulp.src('src/js/*.js')
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/script/'))

})

gulp.task('img',function(){
	gulp.src('src/img/*.*')
		.pipe(gulp.dest('dist/images/'))
})
 
gulp.task('html',function(){
	gulp.src('src/*.html')
		.pipe(htmlmin({
			collapseWhitespace:true,//去掉空白
			removeComments:true//去注释
		}))
		.pipe(gulp.dest('dist'))
})

var bowserSync = require('browser-sync');
gulp.task('serve',function(){
	bowserSync({
		server:{
			baseDir:['dist']
		}
	},function(err,bs){
		console.log(bs.options.getIn(["urls","local"]))
	})
	gulp.watch('src/*.html',['html']);
	gulp.watch('src/style/*.less',['style']);
	gulp.watch('src/js/*.js',['script']);
	gulp.watch('src/img/*.*',['img']);
})
