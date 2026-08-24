module.exports = {
    bindingAddress: '0.0.0.0',
    port: process.env.PORT || 8080,
    crossPort: 8081,
    publicLogs: true,
    password: '',
    workers: 1,
    ssl: {
        enabled: false,
        key: '',
        cert: ''
    },
    diskCache: {
        enabled: false,
        maxAge: 86400000,
        path: './cache'
    }
};
