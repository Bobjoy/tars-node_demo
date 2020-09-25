# Tars Nodejs 示例

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

## 本地调试
### 启动服务端
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

### 客户端测试

```bash
$ npm run test

> tars-node_demo@2.0.0 test /Users/xxx/study/tars_demo
> babel-node test/index.js

=== sayHello === { code: 0, message: 'ok', data: '你好，Tars！' }
=== goWorld === { code: 0, message: 'ok', data: '世界那么大，我想去【西藏】走走！' }
```

## 发布线上测试

### 发布服务包

```bash
$ npm run release

> HelloWorldServer@2.0.0 release /Users/xxx/study/tars_demo
> npm-run-all clean build release:copy release:deploy


> HelloWorldServer@2.0.0 clean /Users/xxx/study/tars_demo
> rimraf release dist


> HelloWorldServer@2.0.0 build /Users/xxx/study/tars_demo
> babel src -s -d dist --copy-files

src/index.js -> dist/index.js
src/protocol/HelloWorld.js -> dist/protocol/HelloWorld.js
src/protocol/HelloWorldImp.js -> dist/protocol/HelloWorldImp.js
src/services/HelloService.js -> dist/services/HelloService.js
src/services/WorldService.js -> dist/services/WorldService.js

> HelloWorldServer@2.0.0 release:copy /Users/xxx/study/tars_demo
> cross-env-shell "shx mkdir -p release/$npm_package_name && shx cp -r dist/ *.json *.conf release/$npm_package_name"


> HelloWorldServer@2.0.0 release:deploy /Users/xxx/study/tars_demo
> cross-env-shell "cd release/$npm_package_name && nodetools upload"

-- Building Environment
   node version: "v10.22.1"
   node path: "/Users/xxx/.nvm/versions/node/v10.22.1/bin/node"
   deploy tool version: "v2.0.6"
   system arch: "x64"
   system platform: "darwin"
!!! We strongly recommend that the deployment under Linux !!!

-- Building deploy package from: "/Users/xxx/study/tars_demo/release/HelloWorldServer"
[  8%] Creating directory structure
[ 15%] Created directory
[ 22%] Copying node exec file
[ 29%] Copied file
[ 36%] Installing node-agent
+ @tars/node-agent@2.1.1
added 77 packages from 64 contributors in 3.352s

2 packages are looking for funding
  run `npm fund` for details

[ 43%] Installed node-agent
[ 50%] Installing dependency
npm WARN HelloWorldServer@2.0.0 No repository field.

added 14 packages from 6 contributors in 1.666s
[ 58%] Installed dependency
[ 65%] Building C/C++ modules
......
[ 72%] Not found C/C++ modules
[ 79%] Making deploy package
[ 86%] Made deploy package
[ 93%] Cleaning temp files
[100%] Cleaned temp files

-- Built deploy package to: "/Users/xxx/study/tars_demo/release/HelloWorldServer/HelloWorldServer.tgz"
upload to tars...
upload result: Method Not Allowed
patch serverId: 91, node_name: 172.25.0.4
-----------------------------------------------------------------
task no:  [e9f50b02442c45dc8f316202f18cf022]

172.25.0.4 EM_I_SUCCESS startServer [DEMO.HelloWorldServer] from 172.25.0.3 :server is activating, please check:

upload success!
```

### 客户端测试

1. 修改servant地址为线上ip

    ```js
    // 客户端和服务端都部署在本地。客户端直连本地服务
    let servant = 'DEMO.HelloWorldServer.HelloWorldObj';
    if (!process.TARS_CONFIG) {
    -    servant += '@tcp -h 127.0.0.1 -p 10086 -t 60000';
    +    servant += '@tcp -h 192.168.6.50 -p 19550 -t 60000';
    }
    ```

2. 执行测试脚本

    ```bash
    $ npm run test

    > HelloWorldServer@2.0.0 test /Users/xxx/study/tars_demo
    > babel-node test/index.js

    === sayHello === { code: 0, message: 'ok', data: '你好，Tars！' }
    === goWorld === { code: 0, message: 'ok', data: '世界那么大，我想去【西藏】走走！' }
    ```

3. 查看Web平台日志

    ```
    2020-09-25 15:07:54|24873|DEBUG|index.js:29|tars server started
    2020-09-25 15:07:54|24879|DEBUG|index.js:29|tars server started
    2020-09-25 15:07:54|24872|DEBUG|index.js:29|tars server started
    2020-09-25 15:16:13|24879|DEBUG|HelloService.js:12|===>>> sayHello req: { username: 'Tars' }
    2020-09-25 15:16:13|24879|DEBUG|WorldService.js:12|===>>> goWorld req: { destination: '西藏' }
    ```
