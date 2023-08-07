//1.1导入http模块
const http = require("http");
//1.2导入fs文件系统模块
const fs = require("fs");
//1.3导入path路径处理模块
const path = require("path");

//2.1创建web服务器
const server = http.createServer();
//2.2监听web服务器的request事件
server.on("request", (req, res) => {
  //3.1 获取客户端请求的URL地址
  // /clock/index.html
  // /clock/index.css
  // /clock/index.js
  const url = req.url;
  //3.2 把请求的URL地址映射为具体文件的存放路径(本地的)
  let fPath = "";
  if (url === "/") {
    fPath = path.join(__dirname, "./clock/index.html");
  } else {
    fPath = path.join(__dirname, "./clock/", url);
  }
  //   const fPath = path.join(__dirname, url);
  //4.1根据映射来的文件路径来读取文件的内容
  fs.readFile(fPath, "utf8", (err, data) => {
    //4.2 读取失败，向客户端响应固定的"错误消息"
    if (err) {
      return res.end("404 Not Found.");
    }
    res.end(data);
  });
});
//2.3启动服务器
server.listen(8080, () => {
  console.log("服务器启动成功, " + "server running at http://localhost:8080");
});
