//这是包的入口文件

//定义格式化时间的函数

function dateFormat(dateStr) {
    const year = dateStr.getFullYear();
    const month = padZero(dateStr.getMonth() + 1);
    const day = padZero(dateStr.getDate());
    const hour = padZero(dateStr.getHours());
    const minute = padZero(dateStr.getMinutes());
    const second = padZero(dateStr.getSeconds());

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

//定义一个补零的函数
function padZero(value) {
    return value < 10 ? '0' + value : value;
}

//定义转义HTML字符的函数
function htmlEscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g, match => {
        switch (match) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case '&':
                return '&amp;';
            default:
                return match;
        }
    });
}
//还原HTML转义后的字符
function htmlUnescape(str) {
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
        switch (match) {
            case '&lt;':
                return '<';
            case '&gt;':
                return '>';
            case '&quot;':
                return '"';
            case '&amp;':
                return '&';
            default:
                return match;
        }
    });
}

//向外暴露需要的成员
module.exports = {
    dateFormat,
    htmlEscape,
    htmlUnescape
}