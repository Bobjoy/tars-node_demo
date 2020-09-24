# Tars-Nodejs 示例

## 简介

```bash
├── README.md
├── package-lock.json
├── package.json
├── server.conf                 // 服务端配置文件
├── src
│   ├── index.js                // 服务端启动入口文件
│   └── rpc
│       ├── HelloWorld.js       // tars2node 生成tars服务端文件
│       ├── HelloWorld.tars     // tars接口定义文件
│       └── HelloWorldImp.js    // tars接口对于实现
│   └── services
│       ├── HelloService.js     // ** 具体业务代码 **
│       └── WorldService.js     // ** 具体业务代码 **
└── test
    ├── index.js                // 客户端测试入口文件
    └── proxy
        └── HelloWorldProxy.js  // tars2node 生成tars客户端文件
```

## 启动服务端
```bash
$ npm run start

> tars-node_demo@2.0.0 start /Users/xxx/study/tars_demo
> nodemon --exec babel-node -w src src/index.js

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node src/index.js`
tars server started
```

## 客户端测试

```bash
$ npm run test

> tars-node_demo@2.0.0 test /Users/xxx/study/tars_demo
> babel-node test/index.js

=== sayHello === { code: 0, message: 'ok', data: '你好，Tars！' }
=== goWorld === { code: 0, message: 'ok', data: '世界那么大，我想去【西藏】走走！' }
```
