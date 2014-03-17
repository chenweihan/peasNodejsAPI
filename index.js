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
 *
 */


/**
 * 全局配置，需要严格控制全局使用
 */
global.ENV = {
    baseDir  : __dirname,
    libDir : __dirname+'/lib/',
    projectDir : __dirname+'/project/',
    domain : '127.0.0.1'
}


//引入依赖模块
var log = require(global.ENV.libDir + 'log.js').log;
var exception = require(global.ENV.libDir+'exception.js').exception;

try {
    //nodejs 启动
    require(global.ENV.libDir+'app.js').init();
    //测试异常类接口
    throw new exception({msg:'自定义抛出异常！',code:'404'});
} catch (e) {
    //记录日志
    log(e.toString(),3); 
    console.log(e.toString());
}

