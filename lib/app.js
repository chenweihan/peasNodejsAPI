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
 * Module dependencies.
 */
var http = require('http'),
    config = require(global.ENV.baseDir+'/config.js'),
    router = require(global.ENV.libDir+'router.js');

/**
 * Application prototype clear module
 */
var app = exports = module.exports = {};

    /**
     * Init function
     */
    app.init = function() {
        app.listen();
    };

    
    app.locals = {};
    
    /**
     * Listen request
     */  
    app.listen = function(){
        http.createServer(function (req, res) { 
              app.handleRequest(req,res); 

        }).listen(1337, '127.0.0.1');
        console.log('Server running at http://127.0.0.1:1337/');
    };
   
    /**
     * config
     */
    app.defaultConfig = function() {
         app.locals = config; 
    };

    /**
     * set 配置
     */
    app.set = function(setting, val){
        if (2 == arguments.length) {
           this.locals[setting] = val;  
           return this;
        } 
    };
    
    /**
     * get配置
     */
    app.get = function(key) { 
        if (1 == arguments.length) {
           return this.locals[key];     
        } 
    };

    /**
     * Url Resolve 
     */ 
    app.handleRequest = function(req,res) {
        console.log('router');
        console.log(router);
    };


