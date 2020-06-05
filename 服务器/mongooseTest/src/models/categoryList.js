/* 
category集合模块
*/
const mongoose = require('mongoose')
    //创建Schema约束对象
const categorySchema = new mongoose.Schema({
    /* 
                { 
"_id" : ObjectId("5ed0db7fd4cf03502c5b48db"), 
"categoryType" : NumberInt(0), 
"imgUrl" : "", 
"showIndex" : NumberInt(0), 
"superCategoryId" : NumberInt(0), 
"bannerUrl" : "", 
"name" : "居家生活", 
"id" : NumberInt(1005000), 
"type" : NumberInt(0), 
"subCateList" : [
  {
      "categoryType" : NumberInt(0), 
      "showIndex" : NumberInt(1), 
      "superCategoryId" : NumberInt(1005000), 
      "level" : "L2", 
      "wapBannerUrl" : "https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png", 
      "name" : "秋冬好物", 
      "id" : NumberInt(109243003), 
      "frontDesc" : "温暖秋冬", 
      "type" : NumberInt(0), 
      "subCateList" : [

      ], 
      "frontName" : "秋冬好物"
  }, 
                */
    name: {
        //字段，类型，必要性，唯一性
        id: {
            type: String,
            require: true,
            unique: true,
        },
        name: {
            type: String,
            require: true,
            unique: true,
        },
        superCategoryId: {
            type: String,
            unique: true,
        },
        imgUrl: String,
        bannerUrl: String,
        frontName: String,
        level: Number,
        wapBannerUrl: String,
        frontDesc: String,
        subCateList: Array,
        type: {
            type: Number,
            default: 0,
        },
        showIndex: {
            type: Number,
            default: 0,
        },
    },
})

const CategoryList = mongoose.model(
        'indexCateModule',
        categorySchema,
        'indexCateModule'
    )
    // console.log('categoryList', CategoryList)
module.exports = CategoryList