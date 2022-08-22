const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    _id:String,
    product:String,
    price:String,
    description:String,
    image:String,
})

const userSchema = new mongoose.Schema({
    _id:String,
    email:String,
    displayName:String
})
// mongodb+srv://karthik:iitkgp@cluster0.nuzkntz.mongodb.net/?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://karthik:iitkgp@cluster0.nuzkntz.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('Connected to database');
    const Product = mongoose.model('products', productSchema);
    const User = mongoose.model('users', userSchema);
    (async()=>{
        // await Product.insertMany([{"_id":"61bb91d5dedacae71c2d4xc4","product":"Banana","price":"10","description":"Farm Fresh Banana.","image":"https://st.depositphotos.com/1642482/1904/i/600/depositphotos_19049353-stock-photo-fruit.jpg"},{"_id":"61bb9258dedacae71c2d4cb5","product":"Jackfruit","price":"60","description":"Fully Firm Fresh Jackfruit.","image":"https://www.mashed.com/img/gallery/the-untold-truth-of-jackfruit/intro-1591724284.jpg"},{"_id":"61bb9401dedacae71c2d4cb6","product":"Avocado","price":"130","description":"Most Popular products.","image":"https://chaldn.com/_mpimage/avocado-fruit-600-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D30217&q=low&v=1&m=400"},{"_id":"61bb9451dedacae71c2d4cb7","product":"Carrots","price":"80","description":"We crops carrots in our farm.","image":"https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"},{"_id":"61bb94a0dedacae71c2d4cb8","product":"Cherries","price":"230","description":"We input fresh cherries from sweden. ","image":"https://images.unsplash.com/photo-1528820600606-0ef5600cbfee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwY2hlcnJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"},{"_id":"61bb94d4dedacae71c2d4cb9","product":"Grapes","price":"300","description":"Its our farms products.","image":"https://media.istockphoto.com/photos/green-grape-isolated-on-white-background-picture-id489520104?k=20&m=489520104&s=612x612&w=0&h=n1_B8jn9fb4dQibPhkXftNpjKA4Rvrjp_ttgj6sq5jY="},{"_id":"61bb9578dedacae71c2d4cbb","product":"Figs","price":"600","description":"We collect fresh figs from saudi arab.","image":"https://media.healthyfood.com/wp-content/uploads/2017/03/In_season_March_Figs.jpg"},{"_id":"61bb9625dedacae71c2d4cbc","product":"Artichoke","price":"700","description":"Our most selling products.","image":"https://media.istockphoto.com/photos/artichoke-isolated-on-white-background-picture-id1168507984?k=20&m=1168507984&s=612x612&w=0&h=Ng17gTD74i7tixfnPhhYDCZ5jhKbyuSjMVDzFwmbb_A="},{"_id":"61bb967ededacae71c2d4cbd","product":"Cucumber","price":"40","description":"Its very healty vegetable.","image":"https://img.freepik.com/free-photo/cucumber-vegetable-isolated-white-background_42033-135.jpg?size=626&ext=jpg"}])
        // product.save();
        // console.log(product);

        const products = await Product.find({});
        const users = await User.find({});
        console.log(users);
        // console.log(products);
    })()

}).catch((e)=>{
    console.log('Could not connect to database', e);
})
