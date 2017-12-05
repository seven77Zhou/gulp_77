# gulp_77
Gulp自动化执行工具
轻内核，没有什么实质性功能，主要使用中靠插件，插件地址：https://gulpjs.com/plugins/

基础使用：
npm init 
npm install gulp --save-dev
创建主文件 ---- gulpfile.js
即可在该文件中编写代码，拿less转css为例：

先安装插件： npm install gulp-less -D  ，
gulpfile.js中编写任务：
var less = require('gulp-less');
编写task：
//less转化css，压缩
gulp.task('style',function(){
	gulp.src(['src/style/*.less','!src/style/_*.less'])//代表不取前面有下划线的less文件
		.pipe(less())
		.pipe(cssnano())
		.pipe(gulp.dest('dist/css/'))
})

常用到的一些gulp插件
gulp-less，
gulp-cssnano,//css文件压缩，取代了gulp-minify-css
gulp-contact,//合并文件
gulp-connect，//创建本地服务器
gulp-rename,//重命名文件
gulp-htmlmin,//压缩html文件
gulp-imagemin,//最小化图像，
gulp-gulify,//压缩多个文件，混淆

更多详细内容推荐：https://github.com/Platform-CUF/use-gulp

另：
常见论坛部分提问Gulp  Webpack的区别：
gulp是工具链、构建工具，可以配合各种插件做js压缩，css压缩，less编译 替代手工实现自动化工作
	1.构建工具
	2.自动化
	3.提高效率用
webpack是文件打包工具，可以把项目的各种js文、css文件等打包合并成一个或多个文件，主要用于模块化方案，预编译模块的方案
	1.打包工具
	2.模块化识别
	3.编译模块代码方案用
所以定义和用法上来说 都不是一种东西，无可比性 ，更不冲突！【当然，也有相似的功能，比如合并，区分，但各有各的优势】
