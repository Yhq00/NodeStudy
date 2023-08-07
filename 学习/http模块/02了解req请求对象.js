//导入http模块
const http = require("http");
//创建web实列
var web = http.createServer();
//绑定请求函数 req是请求对象 包含了与客户端相关的数据和属性
web.on("request", (req) => {
  // req.url 是客户端请求的URL地址
  const url = req.url;
  // req.method 是客户端请求的method类型
  const method = req.method;
  const str = `You request url is ${url}, and request method is ${method}`;
  console.log(str);
});
//启动服务并打印启动地址
web.listen(8080, () => {
  console.log("server running at  http://127.0.0.1:8080");
});
