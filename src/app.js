const express = require("express");
const path = require("path");
require('./db/mongoose')

const app = express();
// const publicDirectoryPath = path.join(__dirname, '../public')

// app.use(express.static(publicDirectoryPath))

const productsRouter = require("./routers/products")
const usersRouter = require("./routers/users")
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
app.use(productsRouter)
app.use(usersRouter)

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log('Server is up on port: '+port);
})