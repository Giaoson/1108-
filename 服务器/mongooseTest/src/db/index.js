const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/datas', {
    // 解决运行时三个警告
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
console.log('连接数据库')
mongoose.connection.once('open', (err) => {
    if (err) {
        console.log('连接数据库失败')
        return
    }
    console.log('连接数据库成功~~~~')
})