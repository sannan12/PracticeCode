const mongoose = require("mongoose")
const { Schema } = require("mongoose")
let schema = new Schema({
    num1: {
        type: Number,
        require: true,

    },
     num2: {
        type: Number,
        require: true,
    },
     num3: {
        type: Number,
        require: true,
    }

});
module.exports = mongoose.model('calculation', schema);