//1.导入express
const express = require('express')
//2.创建web服务器
const app = express()
//4.监听客户端的GET和POST请求，并向客户端响应具体的内容
app.get('/user', (req, res) => {
    //调用express提供的res.send方法向客户端响应JSON对象
    res.send({ name: 'zs', age: 20, gender: '男' })
})
app.post('/user', (req, res) => {
    //调用express提供的res.send方法向客户端响应一个文本字符串
    res.send('请求成功')
})

//测试url
app.get('/', (req, res) => {
    //通过req.query可以获取到客户端发送过来的查询参数
    //注意：默认情况下，req.query是一个空对象
    console.log(req.query);
    res.send(req.query)
})
//注意这里的id是一个动态参数
app.get('/user/:id', (req, res) => {
    //通过req.params是动态匹配到的url参数
    //注意：默认情况下，req.params是一个空对象
    console.log(req.params);
    res.send(req.params)
})



//3.启动web服务器
app.listen(8080, () => {
    console.log('服务器启动成功,运行在http://127.0.0.1')
})