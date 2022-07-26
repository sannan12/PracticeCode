const mongoose = require("mongoose")
const { Schema } = require("mongoose")

let schema = new Schema({
    name: {
        type: String,
        success: true,
    },
    university: {
        type: String,
        success: true,

    },
    rollno: {
        type: String,
        success: true,

    },
    city: {
        type: String,
        success: true,

    },
    sector: {
        type: String,
        success: true,
    },



});
module.exports = mongoose.model("student", schema)
