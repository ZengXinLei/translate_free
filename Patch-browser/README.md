#补环境框架

## 参考文档

[网道JS教程](https://wangdoc.com/javascript/index.html)

[网道ES6教程](https://wangdoc.com/es6/)

[MDN](https://developer.mozilla.org/zh-CN/)

[谷歌浏览器源码](https://source.chromium.org/chromium)

[vm2](https://github.com/patriksimek/vm2)

## 框架结构

```
Patch-browser
|-- node_modules                    //库
|-- src                             //主文件
|   |-- environment                 //环境文件
|   |   |-- browser                 //放浏览器环境js文件
|   |   |-- tools                   //补环境框架要用的工具
|   |   |   |-- memory.js           //框架内存
|   |   |   |-- proxy.js            //框架代理
|   |   |   |-- rename.js           //框架改名工具
|   |   |   |-- safefunction.js     //框架保护函数
|   |   |-- browser_settings.js     //浏览器环境设置(常用)
|   |   |-- tools_settings.js       //加载框架的工具
|   |-- tools                       //工具
|   |   |-- get_json.js             //从浏览器取一个对象
|   |   |-- get_object.js           //从浏览器取一个window以外的对象
|   |   |-- get_object_prototype.js //从浏览器取构造函数
|   |-- code.js                     //要补环境的代码
|   |-- main.js                     //主入口(以调试模式运行)
```
## 使用说明
```
例如补window,首先查看window的隐式原型 window.__proto__
然后浏览器注入 get_object_prototype.js 
copy(get_object_prototype(Window, 'Window', window))
新建一个Window.js放入到browser文件夹中
然后去browser_settings.js进行加载，要注意加载的顺序，父亲往上放
然后在Window写入如下代码
window = this;
Object.setPrototypeOf(window, Window.prototype)
window = environment.proxy(window, 'window')
因为window比较特殊，暂时想不出用脚本嗦下来，求大佬带

在举个例子补document，同样先看document的原型链
然后浏览器注入 get_object_prototype.js 
copy(get_object_prototype(HTMLDocument, 'HTMLDocument', document, 'Document'))
新建一个HTMLDocument.js放入到browser文件夹中
然后去browser_settings.js进行加载，要注意加载的顺序，父亲往上放
然后浏览器注入 get_object.js 
copy(get_object(document, 'document', 'HTMLDocument'))
代码放入到HTMLDocument.js下
在Window.js修改一下
window.document = document

最后是get_json.js的使用
例如浏览器有个对象 window.a = {'a': 1}
先浏览器注入 get_json.js
copy(get_json(window.a))
就能把对象复制下来了，当然直接从浏览器复制也可以，用脚本可以代理一些方法
```
## 其他
[框架的骨架](https://github.com/fanchangrui/catvm)
```
caigou这个变量为沙盒的全局变量，可以在沙盒代码里把值导出来
```

## 结语
```
补的时候始终记住一句话 JS一切皆对象
如果自己实现一遍框架效果会更好
遇到对象不会补，看看MDN，如果有例子直接白嫖即可，没有就自己写，还不行看看浏览器源码，多少有帮助
code.js里面是一个小例子
如果有BUG，或者会被检测，DD我，我是菜狗
```
