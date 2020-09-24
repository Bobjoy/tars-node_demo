# Tars-Nodejs 示例

## 简介

```bash
├── README.md
├── client.conf               // 客户端配置文件
├── package-lock.json
├── package.json
├── server.conf               // 服务端配置文件
├── src
│   ├── index.js              // 服务端启动入口文件
│   └── rpc
│       ├── NodeTars.js       // tars2node 生成tars服务端文件
│       ├── NodeTars.tars     // tars接口定义文件
│       └── NodeTarsImp.js    // tars接口对于实现
└── test
    ├── index.js              // 客户端测试入口文件
    └── proxy
        └── NodeTarsProxy.js  // tars2node 生成tars客户端文件
```

## 启动服务端
```bash
$ npm run server

> server@1.0.0 server /Users/xxxx/study/tars_demo
> node src/index.js

tars server started
 NodeTarsImp initialized
```

## 客户端测试

```bash
$ npm run client

> server@1.0.0 client /Users/xxxx/study/tars_demo
> node test/index.js

remote server endpoint: tcp -h 127.0.0.1 -p 14002 -t 10000
result.response.costtime: 11
result.response.return:  100002
result.response.arguments.sValue1: OUT_czzou_1
result.response.arguments.sValue1: OUT_czzou_2
```
