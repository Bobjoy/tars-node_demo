import Tars from '@tars/rpc';
import { DEMO } from './proxy/HelloWorldProxy';

var tarsRpc = Tars.Communicator.New();
tarsRpc.setProperty('timeout', 2000);

// 客户端和服务端都部署在本地。客户端直连本地服务
let servant = 'DEMO.HelloWorldServer.HelloWorldObj';
if (!process.TAF_CONFIG) {
    servant += '@tcp -h 127.0.0.1 -p 10086 -t 60000';
}

var prx = tarsRpc.stringToProxy(DEMO.HelloWorldProxy, servant);

// 调用接口
const helloReq = new DEMO.HelloReq();
helloReq.readFromObject({ username: 'Tars' });
prx.sayHello(helloReq).then((ret) => {
    ret = ret.response.arguments.rsp.toObject();
    console.log('=== sayHello ===', ret);
}, console.error).done();

// 调用接口
const worldReq = new DEMO.WorldReq();
worldReq.readFromObject({ destination: '西藏' });
prx.goWorld(worldReq).then((ret) => {
    ret = ret.response.arguments.rsp.toObject();
    console.log('=== goWorld ===', ret);
}, console.error).done();
