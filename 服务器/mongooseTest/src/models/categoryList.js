/* 
category集合模块
*/
const mongoose = require('mongoose');
//创建Schema约束对象
const categorySchema = new mongoose.Schema({
    /* 
    数据库中categorylist的存储的某一个对象
     {
              "showIndex" : NumberInt(0), 
              "wapBannerUrl" : "https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png", 
              "bannerUrl" : "https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png", 
              "type" : NumberInt(0), 
              "frontName" : "自家员工眼里，什么值得买", 
              "categoryType" : NumberInt(0), 
              "superCategoryId" : NumberInt(11), 
              "extra" : {
                  "materialContentFrom" : NumberInt(1), 
                  "materialName" : "推荐专区-员工精选好货", 
                  "rcmdSort" : false, 
                  "taskType" : NumberInt(1), 
                  "itemFrom" : NumberInt(0), 
                  "crmUserGroupName" : "无分组", 
                  "resourcesId" : NumberInt(1), 
                  "materialType" : "自定义二级分类", 
                  "crmUserGroupId" : "0", 
                  "materialId" : "54629129", 
                  "taskId" : "54645701"
              }, 
              "name" : "精选好物15元起", 
              "id" : NumberLong(9999954645701), 
              "subCateList" : [

              ]
          },
    */
    name: {
        //字段，类型，必要性，唯一性
        name: String,
        id: Number,
        subCateList: Array
    }
})
const CategoryList = mongoose.model('indexCateModule', categorySchema)
module.exports = CategoryList