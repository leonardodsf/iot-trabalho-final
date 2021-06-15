const express = require('express');
const { v4: uuid } = require('uuid');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).send({
    title: 'IoT Trabalho Final',
    version: '1.0.0',
  });
});

routes.post('/message', (req, res) => {
  res.status(200).send({
    id: uuid(),
    message: 'Request is successfully',
  });
});

module.exports = routes;
