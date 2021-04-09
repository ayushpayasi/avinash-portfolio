const mongoose = require("mongoose")

const projectSchema = mongoose.Schema({
    "title":{
        required:true,
        type:String
    },
    "body":{
        required:true,
        type:String
    },
    "footer":{
        required:true,
        type:String
    }
})

module.exports = mongoose.model("projectModel",projectSchema)