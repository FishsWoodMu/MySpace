//本地配置使用node跑html

const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '172.16.146.135';
const port = 3000;

http.createServer((req, res) => {
  // 设置响应头
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // 读取并返回 HTML 文件
  fs.readFile(path.join(__dirname, 'test.html'), function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
