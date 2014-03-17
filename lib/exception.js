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
      
    this.httpResponseCode = function(code) {
           var text='',code=parseInt(code);
           switch (code) {
                case 100: text = 'Continue'; break;
                case 101: text = 'Switching Protocols'; break;
                case 200: text = 'OK'; break;
                case 201: text = 'Created'; break;
                case 202: text = 'Accepted'; break;
                case 203: text = 'Non-Authoritative Information'; break;
                case 204: text = 'No Content'; break;
                case 205: text = 'Reset Content'; break;
                case 206: text = 'Partial Content'; break;
                case 300: text = 'Multiple Choices'; break;
                case 301: text = 'Moved Permanently'; break;
                case 302: text = 'Moved Temporarily'; break;
                case 303: text = 'See Other'; break;
                case 304: text = 'Not Modified'; break;
                case 305: text = 'Use Proxy'; break;
                case 400: text = 'Bad Request'; break;
                case 401: text = 'Unauthorized'; break;
                case 402: text = 'Payment Required'; break;
                case 403: text = 'Forbidden'; break;
                case 404: text = 'Not Found'; break;
                case 405: text = 'Method Not Allowed'; break;
                case 406: text = 'Not Acceptable'; break;
                case 407: text = 'Proxy Authentication Required'; break;
                case 408: text = 'Request Time-out'; break;
                case 409: text = 'Conflict'; break;
                case 410: text = 'Gone'; break;
                case 411: text = 'Length Required'; break;
                case 412: text = 'Precondition Failed'; break;
                case 413: text = 'Request Entity Too Large'; break;
                case 414: text = 'Request-URI Too Large'; break;
                case 415: text = 'Unsupported Media Type'; break;
                case 500: text = 'Internal Server Error'; break;
                case 501: text = 'Not Implemented'; break;
                case 502: text = 'Bad Gateway'; break;
                case 503: text = 'Service Unavailable'; break;
                case 504: text = 'Gateway Time-out'; break;
                case 505: text = 'HTTP Version not supported'; break;
                default: 'Unknown http status code ';
           }
           return text;  
    };

    this.toString = function() {
          
          var  arr = [], obj = {};
          
          if (Object.prototype.toString.call(this.obj).slice(8, -1) == 'Object') {
               obj.code = this.obj.code;                        
               obj.text = this.httpResponseCode(this.obj.code); 
               obj.msg = this.obj.msg;
          } else {
               obj.msg = obj;
          }
          
          for (var i in obj) {
              arr.push(obj[i]);
          }

          return arr.join(',');
    };

};
