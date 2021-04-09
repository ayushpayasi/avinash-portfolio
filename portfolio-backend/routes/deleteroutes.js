const express = require('express')
const projectModel = require("../schema/projectsschema")

const deleteRoutes = express.Router()

deleteRoutes.delete("/all:id",async (req,res)=>{
    res.send("indelete").status(200)
})


module.exports = deleteRoutes