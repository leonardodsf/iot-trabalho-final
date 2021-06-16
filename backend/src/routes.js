const express = require('express');
const { v4: uuid } = require('uuid');

const routes = express.Router();

routes.post('/message', (req, res) => {
  const io = req.app.get('socketio');

  const { message } = req.body;

  io.emit('message', message);

  res.status(200).send({
    id: uuid(),
    message: 'Request is successfully',
    data: message,
  });
});

module.exports = routes;
