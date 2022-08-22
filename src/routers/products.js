const express = require('express')
const Product = require('../models/products')

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

module.exports = router;