/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : api 路由解析模块
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年03月06日 星期四 16时13分43秒
 * @filename : lib/router.js
 * @version : 
 * @description :
 * //常规使用
 * eg : http://127.0.0.1:1337/index.js?r=json/icom.qti/qtiA/getQti&info={"a":1,"b":2,"c":3,"d":4,"e":5} 
 *      r = 返回类型/目录层级/页面名称(页面名称与类名一致)/函数名
 * //REST调用,在rest函数里，调用rest函数API,原理于上面相同，下面函数命名,使用方式更规范,qtiA url代表资源为qtiA的url唯一标识.rest代表是REST方式的API。
 * eg : http://127.0.0.1:1337/index.js?r=json/icom.qti/qtiA/rest&info={"a":1,"b":2,"c":3,"d":4,"e":5} 
 */

var url = require('url'),
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
    };

    //分发请求
    router.dispatcher = function(str) {
        if (typeof(str) !== 'undefined') { 
            var arr = str.split('/'),
                filePath = '',
                arrDir = [];
            //固定四级结构格式，主要是约束使用者,API必需目录分类
            if (arr.length == 4) {
                arrDir = arr[1].split('.');
                filePath = global.ENV.projectDir+arrDir.join('/')+'/'+arr[2];
                //引入模块 
                var apiModule = require(filePath+'.js');
                //执行函数 
                if (typeof(apiModule[arr[3]]) !== 'undefined') {
                   apiModule[arr[3]](router.req,router.res);
                } else {
                   throw new exception({msg:'请求的函数'+arr[3]+'不存在！',code:'404'});
                }
            } else {
              throw new exception({msg:'请求的url的r参数格式有误！',code:'400'});
            }
        } else {
          throw new exception({msg:'请求的url的没有r参数！',code:'400'});
        }
    };
