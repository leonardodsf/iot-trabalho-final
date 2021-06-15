/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');

const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

const routes = require('./routes');

const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(routes);
app.set('socketio', io);

io.on('connection', socket => {
  console.log(`Socket conectado: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`Socket desconectado: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
