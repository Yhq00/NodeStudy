const fs = require("fs");
fs.readFile("./files/成绩.txt", "utf8", function (err, data) {
  if (err) {
    console.log(err);
  }
  const arr = data.split(" ");
  const arrNew = [];
  arr.forEach((item) => arrNew.push(item.replace("=", "：")));
  const newStr = arrNew.join("\r\n");
  console.log(newStr);
  fs.writeFile("./files/成绩_OK.txt", newStr, function (err) {
    if (err) {
      return console.log(err);
    }
    return console.log("成功");
  });
});
