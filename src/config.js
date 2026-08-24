const fs = require('fs');
const path = require('path');
module.exports = {
    bindingAddress: '0.0.0.0',
    port: process.env.PORT || 8008,
    crossPort: 8081,
    ssl: {
        enabled: false,
        key: '',
        cert: ''
    },
    crossServerKey: 'shh-its-a-secret',
    password: '',
    workers: 1,
    reverseProxy: true,
    publicLogs: true,
    loggingLevel: 'info',
    diskCache: {
        enabled: false,
        maxAge: 86400000,
        path: './cache'
    },
    stripClientHeaders: [],
    getServerInfo: () => ({
        hostname: 'variabledash.up.railway.app',
        port: 443,
        crossDomainPort: 8081,
        protocol: 'https:'
    }),
    generatePrefix: (type) => {
        const time = new Date().toISOString();
        return `(${process.pid}) [${time}] [${type.toUpperCase()}] `;
    },
    getIP: (req) => {
        return req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    }
};
