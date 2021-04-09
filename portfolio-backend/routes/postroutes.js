const express = require("express")
const projectModel = require("../schema/projectsschema")
const experienceModel = require("../schema/experienceschema")
const contactModel = require("../schema/contactschema")

const postRoutes = express.Router()

// post routes for projects
postRoutes.post("/project", async (req,res)=>{
    const createdModel = new projectModel({
        "title":req.body.title,
        "body":req.body.body,
        "footer":req.body.footer
    })
    try{
        const savedPost = await createdModel.save()
        res.status(200).send(res.json(savedPost))
    }
    catch(err){
        res.send({"message":req})
    }
})

// post routes for experience
postRoutes.post("/experience",async(req,res)=>{
    const createdModel = new experienceModel({
        "title":req.body.title,
        "body":req.body.body,
        "duration":req.body.duration
    })
    try{
        const savedData = await createdModel.save()
        res.status(201).send(savedData)
    }
    catch(err){
        res.status(200).send({"message":err})
    }
})

// post routes for contact

postRoutes.post("/contact",async (req,res)=>{
    const createdModel = new contactModel({
        "name":req.body.name,
        "email":req.body.email,
        "contact":req.body.contact,
        "description":req.body.description
    })
    try{
        const data = await createdModel.save()
        res.status(200).send(data)
    }
    catch(err){
        res.send({"message":err}).status(400)
    }
})

module.exports = postRoutes