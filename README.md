peasNodejsAPI
=============

nodejs写的一个 REST 的API 便捷的框架  目前持续开发中

---
已经完成
1:实现了get/post API 请求
2:实现了REST API 请求
3:实现了web socket 的请求

待完成
1：配置文件的统一提取
2：返回类型的完善XML等其他格式
3: 等其他

---  
 * 常规使用 1337 端口
 * eg : http://127.0.0.1:1337/index.js?r=json/icom.qti/qtiA/getQti&info={"a":1,"b":2,"c":3,"d":4,"e":5} 
 *      r = 返回类型/目录层级/页面名称(页面名称与类名一致)/函数名
 * 
 * REST调用,在rest函数里，调用rest函数API,原理于上面相同，下面函数命名,使用方式更规范,qtiA url代表资源为qtiA的url唯一标识.rest代表是REST方式的API。
 * eg : http://127.0.0.1:1337/index.js?r=json/icom.qti/qtiA/rest&info={"a":1,"b":2,"c":3,"d":4,"e":5} 
 * 也就是说如果上面请求是get 那么他会去请求qtiA模块里的restRead函数,post 对应restCreate函数，具体看demo
 *
 *
 * socket: 8081 端口
 * 运行nodejs  拷贝出socket.html页面运行，注意配置路径及端口 
