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
 * 配置全局参数  借鉴了express中的一些设计
 * 支持跨域jsonp
 * 支持rest模式
 * 支持验证
 *
 */

var app = require('lib/app');

global.ENV = {
    baseDir  : __dirname,
    frameDir : __dirname+'/lib/',
    projectDir : __dirname+'/project/',
    domain : '127.0.0.1'
}

console.log(app);

/**
 * 启动函数
var peasNA = require('peasNA'),
    app = peasNA();
*/

