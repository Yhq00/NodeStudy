const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  //1.获取请求的url地址
  const url = req.url;
  //2.设置默认的响应内容为 404 Not Found
  let content = `<h1>404 Not Found!<h1>`;
  //3.判断用户的请求是否为 / 或 index.html首页
  //4.判断用户的的请求是否为 /about.html 关于页面
  if (url === "/" || url === "/index.html") {
    content = "<h1>首页<h1>";
  } else if (url === "/about.html") {
    content = "<h1>关于页面<h1>";
  }
  //5.设置 Content-Type 响应头，防止中文乱码
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  //6.使用res.end()把内容响应给客户端
  res.end(content);
});
server.listen(8080, () => {
  console.log("server running at http://localhost:8080");
});
