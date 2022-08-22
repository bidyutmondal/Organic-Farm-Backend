const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    _id:String,
    product:String,
    price:String,
    description:String,
    image:String,
})
Product = mongoose.model('products', productSchema);

const userSchema = new mongoose.Schema({
    _id:String,
    email:String,
    displayName:String
})
User = mongoose.model('users', userSchema);

const selectedProductsSchema = new mongoose.Schema({
    _id:String,
    name:String,
    email:String,
    phone:String,
    address:String,
    status:String,
    product:String,
})
SelectedProduct = mongoose.model('selectedProducts', selectedProductsSchema)

const reviewSchema = new mongoose.Schema({
    _id:String,
    name:String,
    email:String,
    description:String,
    rating:String,
})
Review = mongoose.model('reviews', reviewSchema);

module.exports = {
    Product, User, SelectedProduct, Review
}



