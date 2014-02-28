/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : 测试文件 
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年02月27日 星期四 11时20分42秒
 * @filename : index.js
 * @version : 
 * @description : api 入口文件
 */

var http = require('http');
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('test11i22 Hello World\n');
    }).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
