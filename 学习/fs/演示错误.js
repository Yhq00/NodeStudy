const fs = require("fs");
//相对路径 动态拼接问题 /d/源码/NodeJs/第一天 根据node运行路径动态拼接会出错
//出现该问题因为./ 或者 ../ 的相对路径
//解决方法 提供 绝对路径
// fs.readFile("./files/1.txt", "utf-8", function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(data);
// });

//移植性差 不利于维护
// fs.readFile(
//   "D:\\源码\\NodeJs\\第一天\\files\\1.txt",
//   "utf-8",
//   function (err, data) {
//     if (err) {
//       return console.error(err);
//     }
//     console.log(data);
//   }
// );

// 双下划线 __dirname 表示当前文件所处目录
fs.readFile(__dirname + "/files/1.txt", "utf-8", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(data);
});
