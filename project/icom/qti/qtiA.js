/*;
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : 
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

    //http://127.0.0.1:1337/index.js?r=json/icom.qti/qtiA/selectSql&info={id:1}
    exports.selectSql = function(req,res) {
       
          //获取参数  
          paramData.param(req,res,function(res,param){
               var id = param['id'],
                   sql = 'SELECT * FORM test WHERE id =' + id;
               
               //数据库查询 
               db.query(sql,function(rs){
                     console.log('selectSql',rs); 
                     debug.print(JSON.stringify(rs),res);
               },res);

          });



         var sql = ' SELECT * form test ';
 



    };
