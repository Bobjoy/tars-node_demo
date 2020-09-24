import Tars from '@tars/rpc';
import { DEMO } from './rpc/HelloWorldImp';

/**
 * global exception
 */
process.on('uncaughtException', err => {
    console.error('uncaughtException #', err);
});

/**
 * global exception
 */
process.on('unhandledRejection', (reason, err) => {
    console.error('unhandledRejection #', reason, err);
});

// init server with config
const svr = new Tars.server();
svr.initialize(process.env.TARS_CONFIG || './server.conf', (server) => {
    server.addServant(DEMO.HelloWorldImp, `${server.Application}.${server.ServerName}.HelloWorldObj`);
    console.log('tars server started');
});

// start server
svr.start();
