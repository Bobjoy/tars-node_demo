// **********************************************************************
// Parsed By TarsParser(2.4.5), Generated By tars2node(20200707)
// TarsParser Maintained By <TARS> and tars2node Maintained By <superzheng>
// Generated from "HelloWorld.tars" by Client Mode
// **********************************************************************

/* eslint-disable */

"use strict";

var assert    = require("assert");
var TarsStream = require("@tars/stream");
var TarsError  = require("@tars/rpc").error;

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _makeError = function (data, message, type) {
    var error = new Error(message || "");
    error.request = data.request;
    error.response = {
        "costtime" : data.request.costtime
    };
    if (type === TarsError.CLIENT.DECODE_ERROR) {
        error.name = "DECODE_ERROR";
        error.response.error = {
            "code" : type,
            "message" : message
        };
    } else {
        error.name = "RPC_ERROR";
        error.response.error = data.error;
    }
    return error;
};

var DEMO = DEMO || {};
module.exports.DEMO = DEMO;

DEMO.HelloWorldProxy = function () {
    this._name    = undefined;
    this._worker  = undefined;
};

DEMO.HelloWorldProxy.prototype.setTimeout = function (iTimeout) {
    this._worker.timeout = iTimeout;
};

DEMO.HelloWorldProxy.prototype.getTimeout = function () {
    return this._worker.timeout;
};

DEMO.HelloWorldProxy.prototype.setVersion = function (iVersion) {
    this._worker.version = iVersion;
};

DEMO.HelloWorldProxy.prototype.getVersion = function () {
    return this._worker.version;
};

DEMO.CommonRsp = function() {
    this.code = 0;
    this.message = "";
    this.data = "";
    this._classname = "DEMO.CommonRsp";
};
DEMO.CommonRsp._classname = "DEMO.CommonRsp";
DEMO.CommonRsp._write = function (os, tag, value) { os.writeStruct(tag, value); };
DEMO.CommonRsp._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
DEMO.CommonRsp._readFrom = function (is) {
    var tmp = new DEMO.CommonRsp;
    tmp.code = is.readInt32(0, true, 0);
    tmp.message = is.readString(1, false, "");
    tmp.data = is.readString(2, false, "");
    return tmp;
};
DEMO.CommonRsp.prototype._writeTo = function (os) {
    os.writeInt32(0, this.code);
    os.writeString(1, this.message);
    os.writeString(2, this.data);
};
DEMO.CommonRsp.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
DEMO.CommonRsp.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
DEMO.CommonRsp.prototype.toObject = function() { 
    return {
        "code" : this.code,
        "message" : this.message,
        "data" : this.data
    };
};
DEMO.CommonRsp.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "code") && (this.code = json.code);
    _hasOwnProperty.call(json, "message") && (this.message = json.message);
    _hasOwnProperty.call(json, "data") && (this.data = json.data);
    return this;
};
DEMO.CommonRsp.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
DEMO.CommonRsp.new = function () {
    return new DEMO.CommonRsp();
};
DEMO.CommonRsp.create = function (is) {
    return DEMO.CommonRsp._readFrom(is);
};

DEMO.HelloReq = function() {
    this.username = "";
    this._classname = "DEMO.HelloReq";
};
DEMO.HelloReq._classname = "DEMO.HelloReq";
DEMO.HelloReq._write = function (os, tag, value) { os.writeStruct(tag, value); };
DEMO.HelloReq._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
DEMO.HelloReq._readFrom = function (is) {
    var tmp = new DEMO.HelloReq;
    tmp.username = is.readString(0, false, "");
    return tmp;
};
DEMO.HelloReq.prototype._writeTo = function (os) {
    os.writeString(0, this.username);
};
DEMO.HelloReq.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
DEMO.HelloReq.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
DEMO.HelloReq.prototype.toObject = function() { 
    return {
        "username" : this.username
    };
};
DEMO.HelloReq.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "username") && (this.username = json.username);
    return this;
};
DEMO.HelloReq.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
DEMO.HelloReq.new = function () {
    return new DEMO.HelloReq();
};
DEMO.HelloReq.create = function (is) {
    return DEMO.HelloReq._readFrom(is);
};

DEMO.WorldReq = function() {
    this.destination = "";
    this._classname = "DEMO.WorldReq";
};
DEMO.WorldReq._classname = "DEMO.WorldReq";
DEMO.WorldReq._write = function (os, tag, value) { os.writeStruct(tag, value); };
DEMO.WorldReq._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
DEMO.WorldReq._readFrom = function (is) {
    var tmp = new DEMO.WorldReq;
    tmp.destination = is.readString(0, false, "");
    return tmp;
};
DEMO.WorldReq.prototype._writeTo = function (os) {
    os.writeString(0, this.destination);
};
DEMO.WorldReq.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
DEMO.WorldReq.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
DEMO.WorldReq.prototype.toObject = function() { 
    return {
        "destination" : this.destination
    };
};
DEMO.WorldReq.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "destination") && (this.destination = json.destination);
    return this;
};
DEMO.WorldReq.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
DEMO.WorldReq.new = function () {
    return new DEMO.WorldReq();
};
DEMO.WorldReq.create = function (is) {
    return DEMO.WorldReq._readFrom(is);
};

var __DEMO_HelloWorld$goWorld$IF = {
    "name" : "goWorld",
    "return" : "int32",
    "arguments" : [{
        "name" : "req",
        "class" : "DEMO.WorldReq",
        "direction" : "in"
    }, {
        "name" : "rsp",
        "class" : "DEMO.CommonRsp",
        "direction" : "out"
    }]
};

var __DEMO_HelloWorld$goWorld$IE = function (req) {
    var os = new TarsStream.TarsOutputStream();
    os.writeStruct(1, req);
    return os.getBinBuffer();
};

var __DEMO_HelloWorld$goWorld$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0),
                "arguments" : {
                    "rsp" : is.readStruct(2, true, DEMO.CommonRsp)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __DEMO_HelloWorld$goWorld$PE = function (req, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeStruct("req", req);
    return tup;
};

var __DEMO_HelloWorld$goWorld$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0),
                "arguments" : {
                    "rsp" : tup.readStruct("rsp", DEMO.CommonRsp)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __DEMO_HelloWorld$goWorld$ER = function (data) {
    throw _makeError(data, "Call HelloWorld::goWorld failed");
};

DEMO.HelloWorldProxy.prototype.goWorld = function (req) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("goWorld", __DEMO_HelloWorld$goWorld$PE(req, version), arguments[arguments.length - 1], __DEMO_HelloWorld$goWorld$IF).then(__DEMO_HelloWorld$goWorld$PD, __DEMO_HelloWorld$goWorld$ER);
    } else {
        return this._worker.tars_invoke("goWorld", __DEMO_HelloWorld$goWorld$IE(req), arguments[arguments.length - 1], __DEMO_HelloWorld$goWorld$IF).then(__DEMO_HelloWorld$goWorld$ID, __DEMO_HelloWorld$goWorld$ER);
    }
};
DEMO.HelloWorldProxy.goWorld = __DEMO_HelloWorld$goWorld$IF;

var __DEMO_HelloWorld$sayHello$IF = {
    "name" : "sayHello",
    "return" : "int32",
    "arguments" : [{
        "name" : "req",
        "class" : "DEMO.HelloReq",
        "direction" : "in"
    }, {
        "name" : "rsp",
        "class" : "DEMO.CommonRsp",
        "direction" : "out"
    }]
};

var __DEMO_HelloWorld$sayHello$IE = function (req) {
    var os = new TarsStream.TarsOutputStream();
    os.writeStruct(1, req);
    return os.getBinBuffer();
};

var __DEMO_HelloWorld$sayHello$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0),
                "arguments" : {
                    "rsp" : is.readStruct(2, true, DEMO.CommonRsp)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __DEMO_HelloWorld$sayHello$PE = function (req, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeStruct("req", req);
    return tup;
};

var __DEMO_HelloWorld$sayHello$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0),
                "arguments" : {
                    "rsp" : tup.readStruct("rsp", DEMO.CommonRsp)
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __DEMO_HelloWorld$sayHello$ER = function (data) {
    throw _makeError(data, "Call HelloWorld::sayHello failed");
};

DEMO.HelloWorldProxy.prototype.sayHello = function (req) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("sayHello", __DEMO_HelloWorld$sayHello$PE(req, version), arguments[arguments.length - 1], __DEMO_HelloWorld$sayHello$IF).then(__DEMO_HelloWorld$sayHello$PD, __DEMO_HelloWorld$sayHello$ER);
    } else {
        return this._worker.tars_invoke("sayHello", __DEMO_HelloWorld$sayHello$IE(req), arguments[arguments.length - 1], __DEMO_HelloWorld$sayHello$IF).then(__DEMO_HelloWorld$sayHello$ID, __DEMO_HelloWorld$sayHello$ER);
    }
};
DEMO.HelloWorldProxy.sayHello = __DEMO_HelloWorld$sayHello$IF;



