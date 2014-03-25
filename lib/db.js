/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : 
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年03月25日 星期二 14时20分53秒
 * @filename : lib/db.js
 * @version : 
 * @description :需要完善连接池的扩展 
 */

var mysql = require('mysql'),
    exception = require(global.ENV.libDir+'exception.js').exception,
    debug = require(global.ENV.libDir + 'debug.js');

//MYSQL
exports.mysqlDB = function() {
     
    var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : '123',
              database : 'nodejs'
        });

    connection.connect();
    connection.query('SELECT * from test', function(err, rows, fields) {
        try {
           if (err) throw err;
           console.log('The solution is: ', rows);
           debug.print(rows);
        } catch (e) {
           var log = debug.log(e.toString(),'SYS'); 
           debug.print(log);
        }
    });
    connection.end();
};

exports.connection = function() {
     var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : '123',
              database : 'nodejs'
         });
         connection.connect();
     return connection;
};

exports.query = function(sql,func) {
     var connection =  exports.connection();
         connection.query('SELECT * from test', function(err, rows, fields) {
            try {
               if (err) throw err;
               console.log('The solution is: ', rows);
               debug.print(rows);
            } catch (e) {
               var log = debug.log(e.toString(),'SYS'); 
               debug.print(log);
            }
         });
         connection.end();
};
