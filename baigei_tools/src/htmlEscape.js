
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

module.exports = {
    htmlEscape,
    htmlUnescape
}