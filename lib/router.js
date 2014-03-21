/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : api 路由解析模块
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年03月06日 星期四 16时13分43秒
 * @filename : lib/router.js
 * @version : 
 * @description :
 * eg : http://127.0.0.1/peasPHPAPI/index.php?r=json/icom.qti/Qti/getQti&info={"a":1,"b":2,"c":3,"d":4,"e":5} 
 *      r = 返回类型/目录层级/页面名称(页面名称与类名一致)/函数名 
 */


var http = require('http'),
    url = require('url'),
    querystring = require("querystring"),
    exception = require(global.ENV.libDir+'exception.js').exception;

/*
 * 路由模块
 */
var router={};   
    router.req = {};
    router.res = {};


    //路由初始化  对外暴露 
    exports.init =  function(req,res) {
        router.req = req;
        router.res = res;
        console.log('router init!'); 
        router.reqURL();
    };
    
    //路由分析
    router.reqURL = function() {
        var urlObj = url.parse(router.req.url),
            queryObj = querystring.parse(urlObj.query);
         
            router.dispatcher(queryObj['r']);
            router.reqParam();
    };

    //分发请求
    router.dispatcher = function(str) {
            var arr = str.split('/'),
                filePath = '',
                arrDir = [];
            //固定四级结构格式，主要是约束使用者API必需目录分类
            if (arr.length == 4) {
                arrDir = arr[1].split('.');
                filePath = global.ENV.projectDir+arrDir.join('/')+'/'+arr[2];

                console.log(filePath); 

            } else {
                throw new exception({msg:'请求的url的r参数格式有误！',code:'400'});
            }
    };

    //参数分析
    router.reqParam = function() {
    
    };
