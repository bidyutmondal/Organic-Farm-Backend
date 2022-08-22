const mongoose = require("mongoose")

// mongodb+srv://karthik:iitkgp@cluster0.nuzkntz.mongodb.net/?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://karthik:iitkgp@cluster0.nuzkntz.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('Connected to database');

}).catch((e)=>{
    console.log('Could not connect to database', e);
})
