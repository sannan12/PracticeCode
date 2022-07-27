const mongoose = require("mongoose")
const { Schema } = require("mongoose")

let schema = new Schema({
    name: {
        type: String,
        require: true,
    },
    university: {
        type: String,
        require: true,

    },
    rollno: {
        type: String,
        require: true,

    },
    city: {
        type: String,
        require: true,

    },
    sector: {
        type: String,
        require: true,
    },



});
module.exports = mongoose.model("student", schema)
