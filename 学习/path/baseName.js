const path = require("path");
const pathStr = "a/b/v/index.html";
var fullName = path.basename(pathStr);
console.log(fullName);

var name = path.basename(pathStr, ".html");
console.log(name);
