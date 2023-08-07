//在一个自定义模块中，默认情况下 module.exports 为空对象

//向module.exports对象上挂载username属性
module.exports.username = "zs";
module.exports.sayHello = function () {
  console.log("Hello");
};
