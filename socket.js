/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : 
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年03月31日 星期一 11时49分59秒
 * @filename : socket.js
 * @version : 
 * @description : 
 */

var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(8081);

function handler (req, res) {
  fs.readFile(__dirname + '/socket.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

