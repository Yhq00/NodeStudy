//1.导入express
const express = require('express')
//2.创建web服务器
const app = express()
//3.启动web服务器
app.listen(8080, () => {
    console.log('服务器启动成功,运行在http://127.0.0.1')
})