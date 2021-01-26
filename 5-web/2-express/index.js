const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express!');
});

server.get('/test', (req, res) => {
  res.send('Hello express test!');
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
