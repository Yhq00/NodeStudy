## 安装

```
npm install baigei_tools

```

## 导入

```js
const baigei_tools = require("baigei_tools");
```

## 格式化时间

```js
//调用dateFormat 对时间进行格式化

const dtStr = index.dateFormat(new Date());

//结果 2023-08-20 15:14:14

console.log(dtStr);
```

## 转义 HTML 字符

```js
//调用escapeHTML 对字符串进行转义
const htmlStr = '<h1 title="abc"> 这是h1标签<span>123&nbsp</span></h1 > ';

//转换结果 &lt;h1 title=&quot;abc&quot;&gt; 这是h1标签&lt;span&gt;123&amp;nbsp&lt;/span&gt;&lt;/h1 &gt;
const res = index.htmlEscape(htmlStr);
```

## 还原 HTML 字符

```js
const res1 = index.htmlUnescape(res);

// 输出结果 <h1 title="abc"> 这是h1标签<span>123&nbsp</span></h1 >
```

## 开源协议

ISC
