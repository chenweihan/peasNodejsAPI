/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : 写入日志文件 
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年03月14日 星期五 16时43分35秒
 * @filename : lib/log.js
 * @version : 
 * @description : 
 */
 
 
var fs = require('fs');
 
exports.log = function(msg,level) {
        var logDir = global.ENV.baseDir+'/log';
       
        //判断目录,同步 
        if(!fs.existsSync(logDir)) {
           fs.mkdirSync('log', 0755);
        }
 
        //记录日志
        var logName = global.ENV.baseDir+'/log/'+exports.logDate()+'-log.txt';
            logMsg = 'time:'+exports.logDate('full') +' level:'+level+' msg:'+msg+'\r\n';
            
            //异步记录日志
            fs.appendFile(logName,logMsg,function(e){
               if(e) throw e;
            });
};
 
exports.logDate = function(type) {
        var d = new Date(),
            time = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        if (type == 'full') {
            time+=' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
        }
        return time;
};
 
