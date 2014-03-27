/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : 请求处理  REST 
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年03月10日 星期一 17时17分12秒
 * @filename : lib/req.js
 * @version : 
 * @description : 
 */

var url = require('url'),
    querystring = require("querystring"),
    exception = require(global.ENV.libDir+'exception.js').exception,
    util = require(global.ENV.libDir+'util.js');
    
    exports.param = function(req,res,callback) {
        switch (req.method) { 
               case 'GET' :
                    exports.get(req,res,callback); 
               break;
               case 'POST':
                    exports.post(req,res,callback); 
               break;
               case 'PUT' :
                    exports.put(req,res,callback); 
               break;
               case 'DELETE':
                    exports.del(req,res,callback); 
               break;
               default:
                   throw new exception({msg:'请求的类型不支持！',code:'400'});
         }
    }; 
 
    //post put 都是异步 get delete是同步 统一模型callback回调执行 
    exports.get = function(req,res,callback) {
        var urlObj = url.parse(req.url),
            queryObj = querystring.parse(urlObj.query),
            param = queryObj['info'];
        //param = util.clone(param); 
        if (param !== '') {
            var infoObj = param;
        } else {
            throw new exception({msg:'请求的url的没有info参数！',code:'400'});
        }
       
        callback(res,infoObj);
    };

    exports.put = function(req,res,callback) {
        req.setEncoding("utf8");
        var postData = ''; 
        req.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
        });

        req.addListener("end", function() {
           callback(res, postData);
        }); 
    };
    
    exports.del = function(req,res,callback) {
        var urlObj = url.parse(req.url),
            queryObj = querystring.parse(urlObj.query),
            param = queryObj['info'];
        if (param !== '') {
            infoObj = JSON.parse(param);
        } else {
            throw new exception({msg:'请求的url的没有info参数！',code:'400'});
        }
        callback(res,infoObj);
    };
      
    exports.post = function(req,res,callback) {
        req.setEncoding("utf8");
        var postData = '';
        req.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
        });
        req.addListener("end", function() {
           callback(res, postData);
        }); 
    };

