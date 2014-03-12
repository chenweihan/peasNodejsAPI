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
 * 支持验证
 *
 */

//引入日志模块 tracer


/**
 * 全局配置，需要严格控制全局使用
 */
global.ENV = {
    baseDir  : __dirname,
    libDir : __dirname+'/lib/',
    projectDir : __dirname+'/project/',
    domain : '127.0.0.1'
}

//引入自定义异常类
var exception = require(global.ENV.libDir+'exception.js').exception;

try {
    //nodejs 启动
    require(global.ENV.libDir+'app.js').init();
    //测试异常类接口
    throw new exception({msg:'自定义抛出异常！',code:'404'});
} catch (e) {
    //记录日志
    //logErrors(e); 
    console.log('log',e,e.toString());
}

