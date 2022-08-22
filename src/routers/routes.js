const express = require('express')
const {Product, User, SelectedProduct, Review} = require('../models/schemas')

const router = new express.Router()

router.get('/products', async(req, res)=>{
    try{
        const products = await Product.find({});
        console.log(products);
        res.send(products);
    }catch{
        res.status(400).send();
    }
})

router.post('/products', async(req, res)=>{
    try{
        await Product.insertOne(res.body);
        res.send('Product added to list');
    }catch{
        res.status(400).send();
    }
})


router.get('/users', async(req, res)=>{
    try{
        const users = await User.find({});
        console.log(users);
        res.send(users);
    }catch{
        res.status(400).send();
    }
})

router.post('/users', async(req, res)=>{
    try{
        await User.insertOne(res.body);
        res.send('User created');
    }catch{
        res.status(400).send();
    }
})

router.get('/selectedProducts', async(req, res)=>{
    try{
        const selProds = await SelectedProduct.findMany({});
        console.log(selProds);
        res.send(selProds)
    }catch{
        res.status(400).send();
    }
})

router.post('/selectedProducts', async(req, res)=>{
    try{
        await SelectedProduct.insertOne(req.body);
        res.send('Added to selected product');
    }catch{
        res.status(400).send();
    }
})

router.get('/reviews', async(req, res)=>{
    try{
        const reviews = await Review.find({});
        console.log(reviews);
        res.send(reviews)
    }catch{
        res.status(400).send();
    }
})
router.post('/reviews', async(req, res)=>{
    try{
        await Review.insertOne(req.body);
        res.send('Review added')
    }catch{
        res.status(400).send();
    }
})

module.exports = router;