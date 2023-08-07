//1.定义格式化时间的方法
function dataFormat(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const hour = padZero(date.getHours());
  const minute = padZero(date.getMinutes());
  const second = padZero(date.getSeconds());
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

//定义补零的函数
function padZero(n) {
  return n > 9 ? n : "0" + n;
}

module.exports = {
  dataFormat,
};
