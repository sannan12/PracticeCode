const cors = require("cors")
const connectDb = require("./config/db.js")
const express = require("express")


const routes = require("./route/route")


connectDb()
const app = express()
app.use(express.json());

const PORT = process.env.PORT || 5000
app.use(express.json())
const corsOptions = {
    credentials: true,
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightcontinue: false,
    optionssSuccessStatus: 204

};
app.options('*', cors(corsOptions));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "HEAD,PUT,POST,GET,OPTION,DELETE");
    res.header("Access-Control-Allow-credentials", "true");
    res.header("Access-Control-Allow-Origin", "Headers", "POST,GET,PUT,DELETE,OPTIONs,HEAD,authorization");
    res.header("Access-Control-expose-Headers", "*")
    next();

});
app.listen(PORT, () => {
    console.log('listening on port 5000')

})


routes(app)
module.exports = app


