const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    _id:String,
    product:String,
    price:String,
    description:String,
    image:String,
})

module.exports = mongoose.model('products', productSchema);
