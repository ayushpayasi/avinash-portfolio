const express = require("express")
const mongoose = require("mongoose")
const getRoutes = require("./routes/getroutes")
const postRoutes = require("./routes/postroutes")
const deleteRoutes = require("./routes/deleteroutes")
const cors = require('cors')

const port = process.env.PORT || 8000

// instance
const server = express()

// database connection
const db = mongoose.connect("mongodb+srv://avinash:ayush123@cluster0.glknq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true},()=>{console.log("connected")})

// middlewares
server.use(cors())
server.use(express.json())
server.use("/get",getRoutes)
server.use("/post",postRoutes)
server.use("/delete",deleteRoutes)



server.listen(port,()=>{
    console.log(`listening on ${port}`)
})
