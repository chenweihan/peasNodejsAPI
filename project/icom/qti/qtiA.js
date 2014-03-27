/*;
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : demo案例 
 * @author : Chen weihan <csq-3@163.com> 
 * @since : 2014年03月24日 星期一 10时21分12秒
 * @filename : project/icom/qti/qtiA.js
 * @version : 
 * @description : 
 */

var paramData = require(global.ENV.libDir+'param.js'),
    db = require(global.ENV.libDir+'db.js'),
    debug = require(global.ENV.libDir + 'debug.js');

    //http://127.0.0.1:1337/index.js?r=json/icom.qti/qtiA/getQti&info={"a":1,"b":2,"c":3,"d":4,"e":5} 
    exports.getQti =  function(req,res) {
          paramData.param(req,res,function(res,param){
              console.log('getQti data',param);
              res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
              res.end(JSON.stringify(param));
          });
    };

    //http://127.0.0.1:1337/index.js?r=json/icom.qti/qtiA/getSql&info={id:1}
    exports.getSql = function(req,res) {
          //获取参数  
          paramData.param(req,res,function(res,param){
               var id = param['id'],
                   sql = 'SELECT * FORM test WHERE id =' + id;
               //数据库查询 
               db.query(sql,function(rs){
                     console.log('getSql',rs); 
                     debug.print(JSON.stringify(rs),res);
               },res);
          });
    };

    //http://127.0.0.1:1337/index.js?r=json/icom.qti/qtiA/postSql
    //post:info={id:1}
    exports.postSql = function(req,res) {
          //获取参数  
          paramData.param(req,res,function(res,param){
               var id = param['id'],
                   sql = 'SELECT * FORM test WHERE id =' + id;
               //数据库查询 
               db.query(sql,function(rs){
                     console.log('postSql',rs); 
                     debug.print(JSON.stringify(rs),res);
               },res);
          });
    };

    //回调多嵌套处理
    exports.callbacks = function(req,res) {
    
    };

    /**
     * REST标准调用
     * eg : http://127.0.0.1:1337/index.js?r=json/icom.qti/qtiA/rest&info={"a":1,"b":2,"c":3,"d":4,"e":5} 
     * 如果最后函数是REST系统会针对提交方式直接调用对于的方法
     *      
     */

    // POST -> Create
    exports.restCreate = function(req,res) {
   
    };
    
    // PUT -> Update
    exports.restUpdate = function(req,res) {
    
    };

    // DELETE -> Delete
    exports.restDelete = function(req,res) {
    
    };

    // GET -> Read
    exports.restRead = function(req,res) {
          paramData.param(req,res,function(res,param){
              console.log('restCreate data',param);
              res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
              res.end(JSON.stringify(param));
          });
    };





