//导入http模块
const http = require("http");
//创建web实列
var web = http.createServer();
//绑定请求函数 req是请求对象 包含了与客户端相关的数据和属性
web.on("request", (req, res) => {
  // req.url 是客户端请求的URL地址
  const url = req.url;
  // req.method 是客户端请求的method类型
  const method = req.method;
  const str = `You request url is ${url}, and request method is ${method} \n`;
  const newStr = `你的请求地址是 ${url}, 你的请求类型是 ${method}`;
  //利用res.setHeader()解决返回中文乱码设置Content-Type响应头
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  console.log(str);
  console.log(newStr);

  //调用res.end()方法,向客户端响应一些内容
  res.end(str + newStr);
});
//启动服务并打印启动地址
web.listen(8080, () => {
  console.log("server running at  http://127.0.0.1:8080");
});
