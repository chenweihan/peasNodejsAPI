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
var http = require('http');

/**
 * Application prototype
 */
var app = exports = module.exports = {};

    /**
     * Init function
     */
    app.init = function() {
       //router url 
       this.cacheRouter = {}; 

       
    };

    /**
     * Listen request
     */
    app.listen = function(){
         http.createServer(function (req, res) { 
              app.handleRequset(req,res); 
         
         }).listen(1337, '127.0.0.1');
    };

    /**
     * Use module
     */
    app.use = function() {
    
    };
 
    /**
     * Url Resolve 
     */ 
    app.handleRequest = function(req,res) {

    };
