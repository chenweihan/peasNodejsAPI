/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : 启动文件  
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年02月27日 星期四 11时20分42秒
 * @filename : index.js
 * @version : 
 * @description : 启动文件
 */


/**
 * 配置全局参数
 * 支持跨域jsonp
 * 支持rest模式
 * 支持websock
 * 支持验证
 * 错误输出到界面上
 */


/**
 * 全局配置，需要严格控制全局使用
 */
global.ENV = {
    baseDir  : __dirname,
    libDir : __dirname+'/lib/',
    projectDir : __dirname+'/project/',
    domain : '127.0.0.1',
    debugPrint : true, //打印错误到界面
    debugLog : true,   //记录错误到日志
    debugConsole : true //记录错误到控制台
}
//启动
require(global.ENV.libDir+'app.js').init();
