/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : api 框架入口文件
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年02月28日 星期五 10时43分11秒
 * @filename : peasNodejsAPI/app.js
 * @version : api 框架入口文件 
 * @description : 
 */

/**
 * 模块依赖
 */
var http = require('http'),
    debug = require(global.ENV.libDir + 'debug.js'),
    router = require(global.ENV.libDir+'router.js');

/**
 * Application prototype clear module
 */
var app = exports = module.exports = {};

    /**
     * 初始化
     */
    app.init = function() {
        app.listen();
    };

    /**
     * 创建服务监听请求
     */  
    app.listen = function(){
        http.createServer(function (req, res) { 
            try {
              app.handleRequest(req,res);
            } catch (e) {
              var log = debug.log(e.toString(),'SYS'); 
                  debug.print(log,res);
            }
        }).listen(1337, '127.0.0.1');
        console.log('Server running at http://127.0.0.1:1337/');
    };
   
    /**
     * 路由解析 
     */ 
    app.handleRequest = function(req,res) {
        router.init(req,res);
    };


