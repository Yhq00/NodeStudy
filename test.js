const index = require('./baigei_tools/index');

// const dtStr = index.dateFormat(new Date());

// console.log(dtStr);

const htmlStr = '<h1 title="abc"> 这是h1标签<span>123&nbsp</span></h1 > '

const res = index.htmlEscape(htmlStr);

const res1 = index.htmlUnescape(res);
console.log(res1);