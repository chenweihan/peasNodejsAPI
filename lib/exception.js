/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : 自定义js异常类 区别系统级异常与代码级异常 
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年03月12日 星期三 16时33分37秒
 * @filename : lib/exception.js
 * @version : 
 * @description : 
 */

/**
 * 异常模块类
 */
exports.exception = function(obj) {
    
    //错误信息对象
    this.obj = obj;
    
      
    this.httpResponseCode = function() {
   
    };

    this.outputSys =  function() {
   
    };

    this.outputCode = function() {
   
    };

    this.toString = function() {
         return this.obj;
    };

};
