const express = require('express');
const { v4: uuid } = require('uuid');

const routes = express.Router();

routes.post('/message', (req, res) => {
  const io = req.app.get('socketio');

  io.emit('log', { data: 'my data is good!' });

  res.status(200).send({
    id: uuid(),
    message: 'Request is successfully',
  });
});

module.exports = routes;
