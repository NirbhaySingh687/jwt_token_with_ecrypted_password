const express = require("express");
const app = express()
const cors = require("cors");

const port = 5000
//middleware

app.use(express.json());//req.body
app.use(cors());

//Router
app.use("/auth",require('./router/jwtAuth'))

//dashboard Routes
app.use('/dashboard',require('./router/dashboard'))

app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`)
})