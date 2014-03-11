/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : api 路由解析模块
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年03月06日 星期四 16时13分43秒
 * @filename : lib/router.js
 * @version : 
 * @description : 
 */

/**
 * 路由模块
 */
var router = exports;
   
    router.req = {};
    router.res = {};


    //路由初始化 
    router.init =  function(req,res) {
        router.req = req;
        router.res = res;
        console.log('router init!'); 
    };

        
