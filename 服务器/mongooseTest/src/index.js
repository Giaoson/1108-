//使用mongoose
//连接数据库
//加载db/index.js中的代码，从而执行内部代码
const express = require('express')
const path = require('path')
require('./db')
    //操作数据库
const CategoryList = require('./models/categoryList.js')
const app = express();
//向外暴露静态资源
app.use(express.static(path.resolve(__dirname, 'public')))
    //解析请求体数据
app.use(express.json())
    //设置路由
app.get('/categoryList', async(req, res) => {
    //处理客户端发送的获取分类列表请求
    const result = await CategoryList.find()
    console.log('请求结果', result)
    res.json({ code: 1000, data: { categoryList: result } })
})
app.listen(9527, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('服务器启动成功');
})