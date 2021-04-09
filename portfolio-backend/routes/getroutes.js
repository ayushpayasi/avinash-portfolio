const express = require("express")
const projectModel = require("../schema/projectsschema")
const experienceModel = require("../schema/experienceschema")
const contactModel = require("../schema/contactschema")

const getRoutes = express.Router()

// get routes for projects
getRoutes.get("/projects",async (req,res)=>{
    try{
    const data = await projectModel.find()
    res.status(200).send(data)
    }
    catch(err){
        res.status(400).send({"message":err})
    }
})

// get routes for experience
getRoutes.get("/experiences",async(req,res)=>{
    try{
        const data = await experienceModel.find()
        res.status(200).send(data)
    }
    catch(err){
    res.status(400).send({"message":err})
    }
})

// get Routes for contact
getRoutes.get("/contact"),async(req,res)=>{
    try{
        const data = await contactModel.find()
        res.send(data)
    }
    catch(err){
        res.send({"message":err})
    }
}

module.exports = getRoutes