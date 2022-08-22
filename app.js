const express = require("express");
require('./db/mongoose')

const app = express();

const router = express.Router();


const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log('Server is up on port: '+port);
})