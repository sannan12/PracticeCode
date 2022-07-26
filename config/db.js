const mongoose = require('mongoose')
const config = require('../config/config.js')

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(config.dbconnection, {
            usenewUrlparser: true,
            useUnifiedtopology: true
        })
        console.log("mongoose connected")
    } catch (err) {
        console.log(err)
    }
}
module.exports = connectDb;