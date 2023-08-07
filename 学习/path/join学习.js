const path = require("path");
// ../ 会抵消一层路径
const pathStr = path.join("/a", "/b/c", "../../", "/d", "e");
console.log(pathStr);

//涉及路径拼接不要使用 + 使用 path.join

const fs = require("fs");

fs.readFile(
  path.join(__dirname, "../fs", "./files/1.txt"),
  "utf-8",
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
);
