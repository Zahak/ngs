import http from 'http';

const server = http.createServer((req, res) => {
  const text = 'Hello World!\nTrying to write new line.';
  res.end(text);
});

server.listen(4242, () => {
  console.log('Server is running...');
});
