const express = require('express');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');
const errorHandler = require('./middleware/errorHandler');
const { PORT } = require('./config');
const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

// websockets
wss.broadcast = (msg, sender) => {
  wss.clients.forEach((client) => {
    // broadcasting to every client except the sender
    if (client !== sender && client.readyState === WebSocket.OPEN) {
      client.send(msg);
    }
  });
};

wss.on('connection', (ws) => {
  console.log('A client connected');

  ws.on('close', () => {
    console.log('Terminating connection.');
    ws.terminate();
  });

  ws.on('message', (msg) => {
    console.log('Got message: ', msg);
    wss.broadcast(msg, ws);
  });
});

// middleware
app.use(errorHandler);

// routes
app.use('/api/messages', require('./routes/messages'));

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { wss };
