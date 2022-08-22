const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id:String,
    email:String,
    displayName:String
})

module.exports = mongoose.model('users', userSchema);
