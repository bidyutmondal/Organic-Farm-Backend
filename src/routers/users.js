const express = require('express')
const User = require('../models/users')

const router = new express.Router()

router.get('/users', async(req, res)=>{
    try{
        const users = await User.find({});
        console.log(users);
        res.send(users);
    }catch{
        res.status(400).send();
    }
})

module.exports = router;