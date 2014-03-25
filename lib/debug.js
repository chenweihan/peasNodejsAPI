/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : 写入日志文件 
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年03月14日 星期五 16时43分35秒
 * @filename : lib/log.js
 * @version : 
 * @description : 
 */
 
 
var fs = require('fs'),
    util = require(global.ENV.libDir+'util.js');

exports.log = function(msg,type) {
        var logDir = global.ENV.baseDir+'/log';
       
        //判断目录,同步 
        if(!fs.existsSync(logDir)) {
           fs.mkdirSync('log', 0755);
        }
 
        //记录日志
        var logName = global.ENV.baseDir+'/log/'+util.formatDate()+'-log.txt';
            logMsg =  type+' '+util.formatDate('full') +' '+msg+'\r\n';
           
        if (global.ENV.debugLog) {    
            //异步记录日志
            fs.appendFile(logName,logMsg,function(e){
               if(e) throw e;
            });
        }
        return logMsg;
};

/**
 * 协议code需要加进去
 */
exports.print = function(logMsg,res) {
        if (res !== undefined && global.ENV.debugPrint) { 
            res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
            res.end(logMsg);
        }
};
