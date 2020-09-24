// **********************************************************************
// Parsed By TarsParser(2.4.5), Generated By tars2node(20200707)
// TarsParser Maintained By <TARS> and tars2node Maintained By <superzheng>
// Generated from "HelloWorld.tars" by Imp Mode
// **********************************************************************

import { DEMO } from './HelloWorld';
import HelloService from '../services/HelloService';
import WorldService from '../services/WorldService';

export { DEMO };

async function reflectRun(current, req, rsp, fn) {
    try {
        const ret = await fn(req.toObject());
        rsp.readFromObject(Object.assign({ code: 0, message: 'ok' }, ret));
        current.sendResponse(0, rsp);
    } catch (err) {
        if (!err.err) {
            err.err = { code: 500, message: 'System Error' };
        }
        console.error(err);
        rsp.readFromObject(err.err);
        current.sendResponse(0, rsp);
    }
};

DEMO.HelloWorldImp.prototype.initialize = function () {};

DEMO.HelloWorldImp.prototype.sayHello = async function (current, req, rsp) {
    await reflectRun(current, req, rsp, HelloService.sayHello);
};

DEMO.HelloWorldImp.prototype.goWorld = async function (current, req, rsp) {
    await reflectRun(current, req, rsp, WorldService.goWorld);
};
