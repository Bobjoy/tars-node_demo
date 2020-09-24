var Tars = require('@tars/rpc');
var TarsDemo  = require('./rpc/NodeTarsImp.js').tars;

var svr = new Tars.server();
svr.initialize(process.env.TARS_CONFIG || './server.conf', function (server){
    server.addServant(TarsDemo.NodeTarsImp, server.Application + '.' + server.ServerName + '.NodeTarsObj');
    console.log('tars server started');
});

svr.start();
