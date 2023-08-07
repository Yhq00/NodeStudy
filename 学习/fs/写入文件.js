const fs = require("fs");

fs.writeFile(
  "./files/成绩.txt",
  "小红=99 小白=100 小黑=66",
  "utf-8",
  function (err) {
    if (err) {
      console.log(err);
    }
    console.log("写入成功");
  }
);
