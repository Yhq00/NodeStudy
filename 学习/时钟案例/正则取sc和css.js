//1.1导入fs文件系统模块
const fs = require("fs");

//1.2导入path路径处理模块

const path = require("path");

//1.3匹配<style></style>标签的正则
// 其中\s表示空白字符；\S表示非空白字符；*表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/;
//1.4匹配<script></script>标签的正则
const regScript = /<script>[\s\S]*<\/script>/;

//2.1读取需要被处理的HTML文件
fs.readFile(
  path.join(__dirname, "../素材/index.html"),
  "utf8",
  function (err, dataStr) {
    //2.2读取HTML文件失败
    if (err) return console.log("读取HTML文件失败！" + err);
    //2,3读取HTML文件成功后，调用对应的方法，拆解出C55、j5和html文件

    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
  }
);

//3.1处理css样式
function resolveCSS(htmlStr) {
  //3.2使用正则提取页面中的<style></style>标签
  const r1 = regStyle.exec(htmlStr);
  //3.3将提取出来的样式字符串，做进一步的处理
  const newCss = r1[0].replace("<style>", "").replace("</style>", "");
  //3.4将提取出来的css样式，写入到index.css文件中
  fs.writeFile(path.join(__dirname, "./clock/index.css"), newCss, (err) => {
    if (err) return console.log("写入CSS样式失败！" + err);
    console.log("写入CSS样式成功！");
  });
}

//4.1处理js脚本
function resolveJS(htmlStr) {
  //4.2使用正则提取页面中的<script></script>标签
  const r2 = regScript.exec(htmlStr);
  //4.3将提取出来的脚本字符串，做进一步的处理
  const newJS = r2[0].replace("<script>", "").replace("</script>", "");
  //4.4将提取出来的js脚本，写入到index.js文件中
  fs.writeFile(path.join(__dirname, "./clock/index.js"), newJS, (err) => {
    if (err) return console.log("写入JavaScript脚本失败！" + err.message);
    console.log("写入JS脚本成功！");
  });
}
//5.处理html文件
function resolveHTML(htmlStr) {
  //5.1使用字符串的replace方法，把内嵌的<style>和<script>标签，替换为外联的<link?和<script>标签
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css"/>')
    .replace(regScript, '<script src="./index.js"></script>');
  //5.2将替换完成之后的html代码，写入到index.html文件中
  fs.writeFile(path.join(__dirname, "./clock/index.html"), newHTML, (err) => {
    if (err) return console.log("写入HTML文件失败！" + err.message);
    console.log("写入HTML页面成功！");
  });
}
