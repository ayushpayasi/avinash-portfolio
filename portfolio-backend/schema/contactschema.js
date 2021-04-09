const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    "name":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true
    },
    "contact":{
        type:String,
    },
    "description":{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("ContactModel",contactSchema)
