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
    db = require(global.ENV.libDir+'db.js');
 
    exports.getQti =  function(req,res) {
          db.mysqlDB(res);
          paramData.param(req,res,function(res,param){
              console.log('api data',param);
              res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
              res.end(JSON.stringify(param));
          });
    };
