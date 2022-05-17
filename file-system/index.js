// NPM modules
const http = require('http');
const express = require('express');

// Util
const Logger = require('../util/Logger');

// Config
const config = {
    global: require('../config'),
    local: require('./config')
}

// Express Server Initialisation
const app = express();
const server = http.createServer(app);

// Routes
const mainRoute = require('./routes');
app.use(mainRoute);


server.listen(config.local.port, () => {
    Logger.success('Server Listening', `Listening on port: ${config.local.port}`)
});

module.exports = app;