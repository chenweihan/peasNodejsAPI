/**
 * Created with Vim7.3 Ubuntu10.04
 * @fileOverview : 启动文件  
 * @author : Chen weihan <csq-3@163.com>
 * @since : 2014年02月27日 星期四 11时20分42秒
 * @filename : index.js
 * @version : 
 * @description : 启动文件
 */


/**
 * 配置全局参数
 * 支持跨域jsonp
 * 支持rest模式
 * 支持websock
 * 支持验证
 * 错误输出到界面上

 * //常规使用
 * eg : http://127.0.0.1:1337/index.js?r=json/icom.qti/qtiA/getQti&info={"a":1,"b":2,"c":3,"d":4,"e":5} 
 *      r = 返回类型/目录层级/页面名称(页面名称与类名一致)/函数名
 * 
 * REST调用,在rest函数里，调用rest函数API,原理于上面相同，下面函数命名,使用方式更规范,qtiA url代表资源为qtiA的url唯一标识.rest代表是REST方式的API。
 * eg : http://127.0.0.1:1337/index.js?r=json/icom.qti/qtiA/rest&info={"a":1,"b":2,"c":3,"d":4,"e":5} 
 * 也就是说如果上面请求是get 那么他会去请求qtiA模块里的restRead函数,post 对应restCreate函数，具体看demo
 */



/**
 * 全局配置，需要严格控制全局使用
 */
global.ENV = {
    baseDir  : __dirname,
    libDir : __dirname+'/lib/',
    projectDir : __dirname+'/project/',
    domain : '127.0.0.1',
    debugPrint : true, //打印错误到界面
    debugLog : true    //记录错误到日志
}
//启动
require(global.ENV.libDir+'app.js').init();
