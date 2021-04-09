const express = require('express')
const mongoose = require('mongoose')

const experienceSchema = mongoose.Schema({
    "title":{
        type:String,
        required:true
    },
    "body":{
        type:String,
        required:true,
    },
    "duration":{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("experienceModel",experienceSchema)