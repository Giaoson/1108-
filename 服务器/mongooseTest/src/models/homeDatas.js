const mongoose = require('mongoose')
const homeListSchema = new mongoose.Schema({

})
const HomeList = mongoose.model(
    'index',
    homeListSchema,
    'index'
)
module.exports = HomeList