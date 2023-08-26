//导入express
const express = require('express');
//创建服务器实例对象
const app = express();

//配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

//配置解析JSON数据的中间件
app.use(express.json())

//导入路由模块
const router = require('./04.API-Router')

//把路由模块，注册到app上
//app.use()用于注册中间件
app.use('/api', router)

//启动服务器
app.listen(3000, () => {
    console.log('服务器启动成功,运行在http://127.0.0.1:3000')
})