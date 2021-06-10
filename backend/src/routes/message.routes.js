const express = require('express');
const { messageController } = require('../controllers');

const messageRoutes = express.Router({});

messageRoutes.get('/', messageController.getList);
messageRoutes.post('/', messageController.addOne);
messageRoutes.get('/count', messageController.getListCount);
messageRoutes.get('/:messageId/', messageController.getOne);
messageRoutes.put('/:messageId/', messageController.updateOne);
messageRoutes.delete('/:messageId/', messageController.deleteOne);

module.exports = messageRoutes;
