const http = require('http');


const server = http.createServer( (req, res) => {
   console.log(req);
  // process.exit();
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head><title>Yummy stuff</title></head>');
  res.write('<body><p>hi</p></body>');
  res.write('</html>');
  res.end();

} );

server.listen(3000);
