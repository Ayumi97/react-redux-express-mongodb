This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

项目结构 
 
 ```
 |--config
 |--node_modules
 |--public
 |--scripts
 |--server                  * 服务器端
 |--src             
  |--component
    |--authroute            * 登录认证
    |--avatar-selector      * 头像选择
    |--boss                 * 牛人页
    |--chat                 * 聊天界面
    |--dashboard            
    |--genius               * 老板页
    |--img                  * 图片
    |--logo
    |--msg                  * 消息
    |--navlink              * 导航
    |--user                 * 个人中心
    |--usercard             * 用户卡片
    |--y-form               * 公用工具组件
  |--container
    |--bossinfo             * 老板个人信息
    |--geniusinfo           * 牛人个人信息
    |--login                * 登录
    |--register             * 注册
  |--redux                  * 交互
    |--chat.redux.js
    |--chatuser.redux.js
    |--user.redux.js
  |--config.js              * 拦截请求\拦截响应
  |--index.css
  |--index.js               * 页面入口
  |--reducers.js
  |--util.js                * 工具函数
 |--package.json
 |--package-lock.json
 |--README.md
 |--yarn.lock
 |--.gitignore

```
# create-react-app    //脚手架创建react项目  

# npm install redux --save  

# npm run eject

# npm install express --save

# npm install -g nodemon

# npm install mongoose --save

## Mac 安装mongo: brew install mongodb ;      启动: brew service start mongodb.

## mongoose

* 定义文档模型，Schema和model新建模型.  
* 一个数据库文档对应一个模型。通过模型对数据库进行操作。  
* Connect连接  
## mongod --config /usr/local/etc/mongod.conf //后台启动

# npm install babel-plugin-transform-decorators-legacy

## package.json里 babel加上plugin配置：
`<
[
  "@babel/plugin-proposal-decorators",
  {
    "legacy":true
  }
]
>`

# npm install body-parser --save

## express使用body-parser支持post参数

# npm install react-router-dom --save

# npm install prop-types —save 属性类型检测

# Npm install browser-cookies  —save 方便管理cookie

```

开发模式:

基于cookie用户验证：express依赖cookie-parser，需要npm install cookie-parser —save;     cookie类似于一张身份卡，登录后服务器端返回，你带着cookie就可以访问受限资源； 页cookie的管理浏览器会自动处理。

前后端实现：

socket.io。前后端通过事件进行双向通信，配合express，快速开发实时应用。

* npm install socket.io

* npm install socket.io —save

* npm install socket.io-client --save

* import io from ‘socket.io-client' //配合express


```
