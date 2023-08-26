const express = require('express');

const router = express.Router();


//在这里挂载对应的路由

router.get('/get', (req, res) => {
    //通过req.query获取到客户端通过查询字符串，发送到服务器的数据
    const query = req.query;
    //调用res.send方法，向客户端响应处理的结果
    res.send({
        status: 0, //0表示成功，1表示处理失败
        msg: 'GET请求成功',//状态的描述
        data: query
    });
})
router.post('/post', (req, res) => {
    //获取客户端通过请求体，发送到服务器的URL-encoded格式的数据
    const body = req.body;
    //调用res.send()方法，向客户端响应处理的结果
    res.send({
        status: 0, //0表示成功，1表示处理失败
        msg: 'POST请求成功',//状态的描述
        data: body  //需要响应给客户端的具体数据
    });
});
module.exports = router;