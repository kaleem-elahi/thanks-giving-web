const express = require('express');
const { error } = require('@yapsody/lib-handlers');

const apiRoutes = express.Router();

const messageRoutes = require('./message.routes');

apiRoutes.use('/messages', messageRoutes);

apiRoutes.use('*', () => error.throwNotFound('Route'));

module.exports = apiRoutes;
