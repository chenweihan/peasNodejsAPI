/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : nodejs 配置模块
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年02月27日 星期四 10时51分34秒
 * @filename : config.js
 * @version : 
 * @description : nodejs配置模块 
 */


/**
 * 根据域名环境自动判断是正式还是开发环境
 */
exports.config = function () {
    var config = {}; 
        //develop
        config = {
                 mysql :  {
                     host : '127.0.0.1',
                     user : 'root',
                     pass : '123',
                     database : 'test',
                     port : 3306
                 }
        };

    //production
    return config;
};
