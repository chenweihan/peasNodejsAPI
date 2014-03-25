/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : 
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年03月24日 星期一 14时48分47秒
 * @filename : lib/util.js
 * @version : 
 * @description : 
 */


var util = exports; 
    //浅克隆
    util.clone = function(obj) {
        var cloneObj = {};
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            cloneObj[i] = obj[i]; 
        } 
        return cloneObj;
    };

    util.formatDate = function(type) {
        var d = new Date(),
            time = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        if (type == 'full') {
            time+=' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
        }
        return time;
    };

