/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : 
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年04月01日 星期二 11时59分08秒
 * @filename : project/socket/socket.js
 * @version : 
 * @description : 
 */

    //socket模块
    exports.all = function(socket) {
          socket.emit('server emit', { hello: 'world' });
          socket.on('client emit', function (data) {
                 console.log(data);
          });
    };

    //socket模块
    exports.chat = function(socket) {
          socket.emit('server emit', { hello: 'world' });
          socket.on('client emit', function (data) {
                 console.log(data);
          });
    };

